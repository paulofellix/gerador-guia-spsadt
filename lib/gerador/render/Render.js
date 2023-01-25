"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Render = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const pdfkit_1 = tslib_1.__importDefault(require("pdfkit"));
const DocContentHandler_1 = require("./DocContentHandler");
const FONTES_DIR = path_1.default.join(__dirname, '../fontes');
const HELVETICA = path_1.default.join(FONTES_DIR, 'Helvetica.ttf');
const HELVETICA_NEGRITO = path_1.default.join(FONTES_DIR, 'Helvetica Bold.ttf');
const HELVETICA_ITALICO = path_1.default.join(FONTES_DIR, 'Helvetica Italic.ttf');
const HELVETICA_NEGRITO_ITALICO = path_1.default.join(FONTES_DIR, 'Helvetica Bold Italic.ttf');
class Render {
    doc;
    pdfOptions;
    pdf;
    docContentHandler;
    constructor(doc, pdfOptions) {
        this.doc = doc;
        this.pdfOptions = pdfOptions;
        this.docContentHandler = new DocContentHandler_1.DocContentHandler(doc.contentOptions);
        doc.content.forEach((lineContent) => {
            const line = this.docContentHandler.addLine(lineContent.lineType, lineContent.height);
            lineContent.fields.forEach((field) => {
                this.docContentHandler.addField(line, {
                    ...field,
                });
            });
        });
        this.pdf = new pdfkit_1.default(pdfOptions);
        this.setup();
        this.drawLogo();
        this.drawContent();
    }
    footer() {
        throw new Error('Method not implemented.');
    }
    setup() {
        this.pdf.lineWidth(1);
        this.registerFonts();
        this.borderPage();
    }
    registerFonts() {
        this.pdf.registerFont('normal', HELVETICA);
        this.pdf.registerFont('negrito', HELVETICA_NEGRITO);
        this.pdf.registerFont('italico', HELVETICA_ITALICO);
        this.pdf.registerFont('negrito-italico', HELVETICA_NEGRITO_ITALICO);
    }
    borderPage() {
        const { width, height } = this.pdf.page;
        const { top: topMargin, left: leftMargin, bottom: bottomMargin } = this.pdfOptions.margins;
        this.pdf
            .rect(topMargin, leftMargin, width - leftMargin * 2, height - (topMargin + bottomMargin))
            .stroke('#000');
    }
    drawLogo(logo) {
        if (!logo)
            return;
        const logoOptions = {
            x: this.doc.contentOptions.startX + 5,
            y: this.doc.contentOptions.startY - 3,
            width: 80,
            height: 30,
            logo: logo,
        };
        try {
            this.pdf.image(logoOptions.logo, logoOptions.x, logoOptions.y, {
                cover: [logoOptions.width, logoOptions.height],
            });
        }
        catch (err) {
            console.error('Erro ao carregar logo: ', err);
        }
    }
    drawContent() {
        this.docContentHandler.doc.forEach((line) => {
            line.fields.forEach((field) => {
                switch (field.fieldType) {
                    case 'text':
                        this.createFieldText({
                            x: field.x,
                            y: field.y,
                            width: field.width,
                            height: field.height,
                            fontSize: field.fontSize,
                            font: field.font,
                            align: field.align,
                            text: field.text,
                            characterSpacing: field.characterSpacing,
                            background: field.background,
                        });
                        break;
                    case 'field':
                        this.createFieldBox({
                            x: field.x,
                            y: field.y,
                            width: field.width,
                            height: field.height,
                            label: field.label,
                            background: field.background,
                            fontSize: field.fontSize,
                        });
                        break;
                    case 'space':
                        break;
                }
            });
        });
    }
    createFieldBox(fieldBox) {
        if (fieldBox.background) {
            this.pdf
                .rect(fieldBox.x, fieldBox.y, fieldBox.width, fieldBox.height)
                .stroke('#000')
                .rect(fieldBox.x + 1, fieldBox.y + 1, fieldBox.width - 2, fieldBox.height - 2)
                .fill(fieldBox.background);
        }
        else {
            this.pdf.rect(fieldBox.x, fieldBox.y, fieldBox.width, fieldBox.height).stroke('#000');
        }
        this.pdf
            .font('negrito')
            .fontSize(fieldBox.fontSize ?? 5)
            .fillColor('#000')
            .text(fieldBox.label, fieldBox.x + 1, fieldBox.y);
    }
    createFieldText(fieldData) {
        if (fieldData.background) {
            this.pdf
                .rect(fieldData.x, fieldData.y, fieldData.width - 2, fieldData.height - 2)
                .fill(fieldData.background);
        }
        this.pdf
            .font(fieldData.font)
            .fontSize(fieldData.fontSize)
            .fillColor(fieldData.fontColor ?? '#000')
            .text(fieldData.text, fieldData.x, fieldData.y, {
            width: fieldData.width,
            height: fieldData.height,
            align: fieldData.align ?? 'left',
            characterSpacing: fieldData.characterSpacing,
        });
    }
    fillField(field, value) {
        if (field === 'logo') {
            this.drawLogo(value);
            return;
        }
        if (typeof value === 'object') {
            for (const key in value) {
                if (Object.prototype.hasOwnProperty.call(value, key)) {
                    const element = value[key];
                    this.fillField(`${field}.${key}`, element);
                }
            }
        }
        else {
            const fieldData = this.docContentHandler.getField(field);
            if (fieldData) {
                const userFillOptions = {
                    fontSize: fieldData.userFillOptions?.fontSize ?? this.doc.contentOptions.userFillOptions.fontSize,
                    font: fieldData.userFillOptions?.font ?? this.doc.contentOptions.userFillOptions.font,
                    paddingLeft: fieldData.userFillOptions?.paddingLeft ??
                        this.doc.contentOptions.userFillOptions.paddingLeft,
                    paddingTop: fieldData.userFillOptions?.paddingTop ??
                        this.doc.contentOptions.userFillOptions.paddingTop,
                    position: fieldData.userFillOptions?.position ?? this.doc.contentOptions.userFillOptions.position,
                    align: fieldData.userFillOptions?.align ?? this.doc.contentOptions.userFillOptions.align,
                };
                if (userFillOptions.align === 'center')
                    userFillOptions.paddingLeft = 0;
                if (userFillOptions.align === 'right')
                    userFillOptions.paddingLeft = -7;
                const x = userFillOptions.position === 'bottom'
                    ? fieldData.x + userFillOptions.paddingLeft
                    : fieldData.x +
                        fieldData.width +
                        this.doc.contentOptions.gapFields +
                        userFillOptions.paddingLeft;
                const y = userFillOptions.position === 'bottom'
                    ? fieldData.y + userFillOptions.paddingTop + fieldData.height / 2
                    : fieldData.y + userFillOptions.paddingTop;
                this.pdf
                    .font(userFillOptions.font ?? 'normal')
                    .fontSize(userFillOptions.fontSize ?? 10)
                    .fillColor('#000')
                    .text(value, x, y, {
                    width: fieldData.width,
                    height: fieldData.height,
                    align: userFillOptions.align ?? 'left',
                    characterSpacing: fieldData.characterSpacing,
                });
            }
        }
    }
    getField(field) {
        return this.docContentHandler.getField(field);
    }
    gerar() {
        this.pdf.flushPages();
        this.pdf.end();
        return this.pdf;
    }
}
exports.Render = Render;
//# sourceMappingURL=Render.js.map