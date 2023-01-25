/// <reference types="pdfkit" />
import { GuiaConsulta } from '../../types';
export declare class GeradorGuiaConsulta {
    gerarPdf(guia: GuiaConsulta): PDFKit.PDFDocument;
}
