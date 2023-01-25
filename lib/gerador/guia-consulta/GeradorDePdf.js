"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeradorDePdf = void 0;
const Render_1 = require("../render/Render");
const GuiaConsultaOpts_1 = require("./GuiaConsultaOpts");
class GeradorDePdf extends Render_1.Render {
    guia;
    constructor(guia) {
        super(GuiaConsultaOpts_1.GuiaConsultaOpts.docStruct, GuiaConsultaOpts_1.GuiaConsultaOpts.pdfOptions);
        this.guia = guia;
        this.fillData();
    }
    fillData() {
        for (const key in this.guia) {
            if (Object.prototype.hasOwnProperty.call(this.guia, key)) {
                const value = this.guia[key];
                if (value) {
                    this.fillField(key, value);
                }
            }
        }
    }
}
exports.GeradorDePdf = GeradorDePdf;
//# sourceMappingURL=GeradorDePdf.js.map