"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeradorGuiaConsulta = void 0;
const GeradorDePdf_1 = require("./GeradorDePdf");
class GeradorGuiaConsulta {
    gerarPdf(guia) {
        return new GeradorDePdf_1.GeradorDePdf(guia).gerar();
    }
}
exports.GeradorGuiaConsulta = GeradorGuiaConsulta;
//# sourceMappingURL=index.js.map