/// <reference types="pdfkit" />
import { DocField, FieldBox, FieldText, Doc } from '../../types';
export declare class Render {
    private doc;
    private pdfOptions;
    pdf: PDFKit.PDFDocument;
    private docContentHandler;
    constructor(doc: Doc, pdfOptions: PDFKit.PDFDocumentOptions);
    footer(): void;
    setup(): void;
    registerFonts(): void;
    borderPage(): void;
    drawLogo(logo?: any): void;
    drawContent(): void;
    createFieldBox(fieldBox: FieldBox): void;
    createFieldText(fieldData: FieldText): void;
    fillField(field: string, value: string | object): void;
    getField(field: string): DocField;
    gerar(): PDFKit.PDFDocument;
}
