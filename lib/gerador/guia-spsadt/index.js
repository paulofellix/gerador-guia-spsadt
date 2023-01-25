"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeradorGuiaSPSADT = void 0;
const GeradorDePdf_1 = require("./GeradorDePdf");
class GeradorGuiaSPSADT {
    gerarPdf(guia) {
        return new GeradorDePdf_1.GeradorDePdf(guia).gerar();
    }
}
exports.GeradorGuiaSPSADT = GeradorGuiaSPSADT;
//# sourceMappingURL=index.js.map