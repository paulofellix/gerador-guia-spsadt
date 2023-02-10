"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuiaSPSADTOpts = void 0;
const consts_1 = require("../../consts");
var GuiaSPSADTOpts;
(function (GuiaSPSADTOpts) {
    GuiaSPSADTOpts.pdfOptions = {
        bufferPages: true,
        layout: 'landscape',
        margins: {
            top: 28,
            right: 28,
            bottom: 28,
            left: 28,
        },
        size: 'a4',
    };
    GuiaSPSADTOpts.doc = {
        contentOptions: {
            startX: GuiaSPSADTOpts.pdfOptions.margins.left,
            startY: GuiaSPSADTOpts.pdfOptions.margins.top,
            startFieldsX: GuiaSPSADTOpts.pdfOptions.margins.left + 4,
            gapLines: 1.5,
            gapFields: 3,
            fieldLabelSize: 6,
            userFillOptions: {
                position: 'bottom',
                paddingTop: 0,
                paddingLeft: 3,
                fontSize: 6,
                font: 'normal',
                align: 'left',
            },
        },
        content: [
            {
                lineType: 'custom',
                height: 30,
                fields: [
                    {
                        fieldType: 'text',
                        x: 0,
                        y: 3,
                        width: consts_1.A4Landscape.width - GuiaSPSADTOpts.pdfOptions.margins.left - GuiaSPSADTOpts.pdfOptions.margins.right + 10,
                        font: 'negrito',
                        fontSize: 10,
                        height: 10,
                        text: 'GUIA DE SERVIÇO PROFISSIONAL / SERVIÇO AUXILIAR DE DIAGNÓSTICO E TERAPIA - SP/SADT',
                        align: 'center',
                        characterSpacing: 0.3,
                    },
                    {
                        id: 'numeroGuiaPrestador',
                        fieldType: 'text',
                        x: 520,
                        y: 20,
                        width: 90,
                        font: 'normal',
                        fontSize: 7,
                        height: 5,
                        text: '2 - Nº Guia no Prestador:',
                        characterSpacing: 0.1,
                        userFillOptions: {
                            position: 'right',
                            fontSize: 7,
                            paddingLeft: -10,
                            paddingTop: -2,
                            font: 'negrito',
                        },
                    },
                    {
                        fieldType: 'text',
                        x: consts_1.A4Landscape.width - GuiaSPSADTOpts.pdfOptions.margins.left - GuiaSPSADTOpts.pdfOptions.margins.right - 23,
                        y: 0,
                        width: 100,
                        font: 'negrito',
                        fontSize: 5,
                        height: 5,
                        text: 'V.3.0',
                        characterSpacing: 0.3,
                    },
                    {
                        id: 'nrAtendimento',
                        fieldType: 'text',
                        x: consts_1.A4Landscape.width - GuiaSPSADTOpts.pdfOptions.margins.left - GuiaSPSADTOpts.pdfOptions.margins.right - 71,
                        y: 8,
                        width: 30,
                        font: 'negrito',
                        fontSize: 8,
                        height: 8,
                        text: 'Atend.:',
                        userFillOptions: {
                            position: 'right',
                            font: 'negrito',
                            fontSize: 8,
                            paddingLeft: -3,
                        },
                    },
                    {
                        id: 'nrConta',
                        fieldType: 'text',
                        x: consts_1.A4Landscape.width - GuiaSPSADTOpts.pdfOptions.margins.left - GuiaSPSADTOpts.pdfOptions.margins.right - 68,
                        y: 16,
                        width: 30,
                        font: 'negrito',
                        fontSize: 8,
                        height: 8,
                        text: 'Conta:',
                        userFillOptions: {
                            position: 'right',
                            font: 'negrito',
                            fontSize: 8,
                            paddingLeft: -6,
                        },
                    },
                ],
            },
            {
                lineType: 'fields',
                height: 17,
                fields: [
                    {
                        id: 'registroANS',
                        fieldType: 'field',
                        label: '1 - Registro ANS',
                        width: 70,
                    },
                    {
                        id: 'numeroGuiaPrincipal',
                        fieldType: 'field',
                        label: '3 - Nº Guia Principal',
                        width: 150,
                    },
                ],
            },
            {
                lineType: 'fields',
                height: 17,
                fields: [
                    {
                        id: 'dataAutorizacao',
                        fieldType: 'field',
                        label: '4 - Data da Autorização',
                        width: 70,
                    },
                    {
                        id: 'senha',
                        fieldType: 'field',
                        label: '5 - Senha',
                        width: 150,
                    },
                    {
                        id: 'dataValidadeSenha',
                        fieldType: 'field',
                        label: '6 - Data Validade da Senha',
                        width: 83,
                    },
                    {
                        id: 'numeroGuiaOperadora',
                        fieldType: 'field',
                        label: '7 - Número da Guia Atríbuido pela Operadora',
                        width: 150,
                    },
                ],
            },
            {
                lineType: 'custom',
                height: 6,
                fields: [
                    {
                        fieldType: 'text',
                        x: 0,
                        y: 0,
                        width: consts_1.A4Landscape.width - GuiaSPSADTOpts.pdfOptions.margins.left - GuiaSPSADTOpts.pdfOptions.margins.right - 7,
                        font: 'negrito',
                        fontSize: 5,
                        height: 8,
                        text: 'Dados do Beneficiário',
                        background: 'silver',
                    },
                ],
            },
            {
                lineType: 'fields',
                height: 17,
                fields: [
                    {
                        id: 'numeroCarteira',
                        fieldType: 'field',
                        label: '8 - Número da Carteira',
                        width: 180,
                    },
                    {
                        id: 'validadeCarteira',
                        fieldType: 'field',
                        label: '9 - Validade da Carteira',
                        width: 87,
                    },
                    {
                        id: 'nomeBeneficiario',
                        fieldType: 'field',
                        label: '10 - Nome',
                        width: 243,
                    },
                    {
                        id: 'cartaoNacionalSaude',
                        fieldType: 'field',
                        label: '11 - Cartão Nacional de Saúde',
                        width: 180,
                    },
                    {
                        id: 'atendimentoRN',
                        fieldType: 'field',
                        label: '12 - Atendimento a RN',
                        width: 74,
                        userFillOptions: {
                            align: 'center',
                        },
                    },
                ],
            },
            {
                lineType: 'custom',
                height: 6,
                fields: [
                    {
                        fieldType: 'text',
                        x: 0,
                        y: 0,
                        width: consts_1.A4Landscape.width - GuiaSPSADTOpts.pdfOptions.margins.left - GuiaSPSADTOpts.pdfOptions.margins.right - 7,
                        font: 'negrito',
                        fontSize: 5,
                        height: 8,
                        text: 'Dados do Solicitante',
                        background: 'silver',
                    },
                ],
            },
            {
                lineType: 'fields',
                height: 17,
                fields: [
                    {
                        id: 'dadosSolicitante.codigoNaOperadora',
                        fieldType: 'field',
                        label: '13 - Código na Operadora',
                        width: 143,
                    },
                    {
                        id: 'dadosSolicitante.nomeContratado',
                        fieldType: 'field',
                        label: '14 - Nome do Contratado',
                        width: 630,
                    },
                ],
            },
            {
                lineType: 'fields',
                height: 17,
                fields: [
                    {
                        id: 'dadosSolicitante.nomeProfissionalSolicitante',
                        fieldType: 'field',
                        label: '15 - Nome do Profissional Solicitante',
                        width: 225,
                    },
                    {
                        id: 'dadosSolicitante.conselhoProfissional',
                        fieldType: 'field',
                        label: '16 - Conselho Profissional',
                        width: 78,
                        userFillOptions: {
                            align: 'center',
                        },
                    },
                    {
                        id: 'dadosSolicitante.numeroConselhoProfissional',
                        fieldType: 'field',
                        label: '17 - Número no Conselho',
                        width: 105,
                    },
                    {
                        id: 'dadosSolicitante.ufConselhoProfissional',
                        fieldType: 'field',
                        label: '18 - UF',
                        width: 27,
                        userFillOptions: {
                            align: 'center',
                        },
                    },
                    {
                        id: 'dadosSolicitante.codigoCBO',
                        fieldType: 'field',
                        label: '19 - Código CBO',
                        width: 77,
                    },
                    {
                        id: 'dadosSolicitante.assinaturaProfissionalSolicitante',
                        fieldType: 'field',
                        label: '20 - Assinatura do Profissional Solicitante',
                        width: 249,
                        userFillOptions: {
                            align: 'center',
                        },
                    },
                ],
            },
            {
                lineType: 'custom',
                height: 6,
                fields: [
                    {
                        fieldType: 'text',
                        x: 0,
                        y: 0,
                        width: consts_1.A4Landscape.width - GuiaSPSADTOpts.pdfOptions.margins.left - GuiaSPSADTOpts.pdfOptions.margins.right - 7,
                        font: 'negrito',
                        fontSize: 5,
                        height: 8,
                        text: 'Dados da Solicitação / Procedimentos ou Itens Assistenciais Solicitados',
                        background: 'silver',
                    },
                ],
            },
            {
                lineType: 'fields',
                height: 17,
                fields: [
                    {
                        id: 'dadosSolicitacao.caraterAtendimento',
                        fieldType: 'field',
                        label: '21 - Caráter do Atendimento',
                        width: 85,
                        userFillOptions: {
                            align: 'center',
                        },
                    },
                    {
                        id: 'dadosSolicitacao.dataSolicitacao',
                        fieldType: 'field',
                        label: '22 - Data da Solicitação',
                        width: 83,
                    },
                    {
                        id: 'dadosSolicitacao.indicacaoClinica',
                        fieldType: 'field',
                        label: '23 - Indicação Clínica',
                        width: 602,
                    },
                ],
            },
            {
                lineType: 'fields',
                height: 65,
                fields: [
                    {
                        id: 'dadosSolicitacao.procedimentosSolicitados',
                        fieldType: 'field',
                        label: '',
                        width: consts_1.A4Landscape.width - GuiaSPSADTOpts.pdfOptions.margins.left - GuiaSPSADTOpts.pdfOptions.margins.right - 10,
                    },
                ],
            },
            {
                lineType: 'custom',
                height: 6,
                fields: [
                    {
                        fieldType: 'text',
                        x: 0,
                        y: 0,
                        width: consts_1.A4Landscape.width - GuiaSPSADTOpts.pdfOptions.margins.left - GuiaSPSADTOpts.pdfOptions.margins.right - 7,
                        font: 'negrito',
                        fontSize: 5,
                        height: 8,
                        text: 'Dados do Contratado Executante',
                        background: 'silver',
                    },
                ],
            },
            {
                lineType: 'fields',
                height: 17,
                fields: [
                    {
                        id: 'dadosExecutante.codigoNaOperadora',
                        fieldType: 'field',
                        label: '29 - Código na Operadora',
                        width: 142,
                        fontSize: 5,
                    },
                    {
                        id: 'dadosExecutante.nomeContratado',
                        fieldType: 'field',
                        label: '30 - Nome do Contratado',
                        width: 575,
                        fontSize: 5,
                    },
                    {
                        id: 'dadosExecutante.codigoCNES',
                        fieldType: 'field',
                        label: '31 - Código CNES',
                        width: 53,
                        fontSize: 5,
                    },
                ],
            },
            {
                lineType: 'custom',
                height: 6,
                fields: [
                    {
                        fieldType: 'text',
                        x: 0,
                        y: 0,
                        width: consts_1.A4Landscape.width - GuiaSPSADTOpts.pdfOptions.margins.left - GuiaSPSADTOpts.pdfOptions.margins.right - 7,
                        font: 'negrito',
                        fontSize: 5,
                        height: 8,
                        text: 'Dados do Atendimento',
                        background: 'silver',
                    },
                ],
            },
            {
                lineType: 'fields',
                height: 17,
                fields: [
                    {
                        id: 'tipoAtendimento',
                        fieldType: 'field',
                        label: '32 - Tipo de Atendimento',
                        width: 75,
                        fontSize: 5,
                        userFillOptions: {
                            align: 'center',
                        },
                    },
                    {
                        id: 'indicacaoAcidente',
                        fieldType: 'field',
                        label: '33 - Indicação de Acidente (acidente ou doença relacionada)',
                        width: 160,
                        fontSize: 5,
                        userFillOptions: {
                            align: 'center',
                        },
                    },
                    {
                        id: 'tipoConsulta',
                        fieldType: 'field',
                        label: '34 - Tipo de Consulta',
                        width: 77,
                        fontSize: 5,
                        userFillOptions: {
                            align: 'center',
                        },
                    },
                    {
                        id: 'motivoEncerramentoAtendimento',
                        fieldType: 'field',
                        label: '35 - Motivo de Encerramento do Atendimento',
                        width: 120,
                        fontSize: 5,
                        userFillOptions: {
                            align: 'center',
                        },
                    },
                ],
            },
            {
                lineType: 'custom',
                height: 6,
                fields: [
                    {
                        fieldType: 'text',
                        x: 0,
                        y: 0,
                        width: consts_1.A4Landscape.width - GuiaSPSADTOpts.pdfOptions.margins.left - GuiaSPSADTOpts.pdfOptions.margins.right - 7,
                        font: 'negrito',
                        fontSize: 5,
                        height: 8,
                        text: 'Dados da Execução / Procedimentos e Exames Realizados',
                        background: 'silver',
                    },
                ],
            },
            {
                lineType: 'fields',
                height: 65,
                fields: [
                    {
                        id: 'procedimentosRealizados',
                        fieldType: 'field',
                        label: '',
                        width: consts_1.A4Landscape.width - GuiaSPSADTOpts.pdfOptions.margins.left - GuiaSPSADTOpts.pdfOptions.margins.right - 10,
                    },
                ],
            },
            {
                lineType: 'custom',
                height: 6,
                fields: [
                    {
                        fieldType: 'text',
                        x: 0,
                        y: 0,
                        width: consts_1.A4Landscape.width - GuiaSPSADTOpts.pdfOptions.margins.left - GuiaSPSADTOpts.pdfOptions.margins.right - 7,
                        font: 'negrito',
                        fontSize: 5,
                        height: 8,
                        text: 'Identificação do(s) Profissional(is) Executante(s)',
                        background: 'silver',
                    },
                ],
            },
            {
                lineType: 'fields',
                height: 65,
                fields: [
                    {
                        id: 'profissionaisExecutantes',
                        fieldType: 'field',
                        label: '',
                        width: consts_1.A4Landscape.width - GuiaSPSADTOpts.pdfOptions.margins.left - GuiaSPSADTOpts.pdfOptions.margins.right - 10,
                    },
                ],
            },
            {
                lineType: 'fields',
                height: 30,
                fields: [
                    {
                        id: 'dataRealizacaoProcedimentos',
                        fieldType: 'field',
                        label: '56 - Data de Realização de Procedimentos em Série    57 - Assinatura do Beneficiário ou Responsáve',
                        width: consts_1.A4Landscape.width - GuiaSPSADTOpts.pdfOptions.margins.left - GuiaSPSADTOpts.pdfOptions.margins.right - 10,
                        fontSize: 5,
                    },
                ],
            },
            {
                lineType: 'fields',
                height: 30,
                fields: [
                    {
                        id: 'observacaoJustificativa',
                        fieldType: 'field',
                        label: '58 - Observação / Justificativa',
                        fontSize: 5,
                        width: consts_1.A4Landscape.width - GuiaSPSADTOpts.pdfOptions.margins.left - GuiaSPSADTOpts.pdfOptions.margins.right - 10,
                        background: '#f2f2f2',
                        userFillOptions: {
                            paddingTop: -3,
                        },
                    },
                ],
            },
            {
                lineType: 'fields',
                height: 17,
                fields: [
                    {
                        id: 'valorTotalProcedimentos',
                        fieldType: 'field',
                        label: '59 - Total Procedimentos (R$)',
                        width: 108,
                        fontSize: 5,
                        userFillOptions: {
                            align: 'right',
                        },
                    },
                    {
                        id: 'valorTotalTaxasAlugueis',
                        fieldType: 'field',
                        label: '60 - Total Taxas e Aluguéis (R$)',
                        width: 108,
                        fontSize: 5,
                        userFillOptions: {
                            align: 'right',
                        },
                    },
                    {
                        id: 'valorTotalMateriais',
                        fieldType: 'field',
                        label: '61 - Total Materiais (R$)',
                        width: 108,
                        fontSize: 5,
                        userFillOptions: {
                            align: 'right',
                        },
                    },
                    {
                        id: 'valorTotalOPME',
                        fieldType: 'field',
                        label: '62 - Total de OPME (R$)',
                        width: 109,
                        fontSize: 5,
                        userFillOptions: {
                            align: 'right',
                        },
                    },
                    {
                        id: 'valorTotalMedicamentos',
                        fieldType: 'field',
                        label: '63 - Total Medicamentos (R$)',
                        width: 109,
                        fontSize: 5,
                        userFillOptions: {
                            align: 'right',
                        },
                    },
                    {
                        id: 'valorTotalGasesMedicinais',
                        fieldType: 'field',
                        label: '64 - Total Gases Medicinais R$',
                        width: 108,
                        fontSize: 5,
                        userFillOptions: {
                            align: 'right',
                        },
                    },
                    {
                        id: 'valorTotalGeral',
                        fieldType: 'field',
                        label: '65 - Total Geral (R$)',
                        width: 108,
                        fontSize: 5,
                        userFillOptions: {
                            align: 'right',
                        },
                    },
                ],
            },
            {
                lineType: 'fields',
                height: 17,
                fields: [
                    {
                        id: 'assinaturaResponsavelAutorizacao',
                        fieldType: 'field',
                        label: '66 - Assinatura do Responsável pela Autorização',
                        width: 256,
                        fontSize: 5,
                    },
                    {
                        id: 'assinaturaBeneficiario',
                        fieldType: 'field',
                        label: '67 - Assinatura do Beneficiário ou Responsável',
                        width: 258,
                        fontSize: 5,
                    },
                    {
                        id: 'assinaturaContratado',
                        fieldType: 'field',
                        label: '68 - Assinatura do Contratado',
                        width: 256,
                        fontSize: 5,
                    },
                ],
            },
        ],
    };
    let GuiaFields;
    (function (GuiaFields) {
        GuiaFields["nrAtendimento"] = "nrAtendimento";
        GuiaFields["nrConta"] = "nrConta";
        GuiaFields["numeroGuiaPrestador"] = "numeroGuiaPrestador";
        GuiaFields["registroANS"] = "registroANS";
        GuiaFields["numeroGuiaPrincipal"] = "numeroGuiaPrincipal";
        GuiaFields["dataAutorizacao"] = "dataAutorizacao";
        GuiaFields["senha"] = "senha";
        GuiaFields["dataValidadeSenha"] = "dataValidadeSenha";
        GuiaFields["numeroGuiaOperadora"] = "numeroGuiaOperadora";
        GuiaFields["numeroCarteira"] = "numeroCarteira";
        GuiaFields["validadeCarteira"] = "validadeCarteira";
        GuiaFields["nomeBeneficiario"] = "nomeBeneficiario";
        GuiaFields["cartaoNacionalSaude"] = "cartaoNacionalSaude";
        GuiaFields["atendimentoRN"] = "atendimentoRN";
        GuiaFields["dadosSolicitante.codigoNaOperadora"] = "dadosSolicitante.codigoNaOperadora";
        GuiaFields["dadosSolicitante.nomeContratado"] = "dadosSolicitante.nomeContratado";
        GuiaFields["dadosSolicitante.nomeProfissionalSolicitante"] = "dadosSolicitante.nomeProfissionalSolicitante";
        GuiaFields["dadosSolicitante.conselhoProfissional"] = "dadosSolicitante.conselhoProfissional";
        GuiaFields["dadosSolicitante.numeroConselhoProfissional"] = "dadosSolicitante.numeroConselhoProfissional";
        GuiaFields["dadosSolicitante.ufConselhoProfissional"] = "dadosSolicitante.ufConselhoProfissional";
        GuiaFields["dadosSolicitante.codigoCBO"] = "dadosSolicitante.codigoCBO";
        GuiaFields["dadosSolicitante.assinaturaProfissionalSoliciatante"] = "dadosSolicitante.assinaturaProfissionalSoliciatante";
        GuiaFields["dadosSolicitacao.caraterAtendimento"] = "dadosSolicitacao.caraterAtendimento";
        GuiaFields["dadosSolicitacao.dataSolicitacao"] = "dadosSolicitacao.dataSolicitacao";
        GuiaFields["dadosSolicitacao.indicacaoClinica"] = "dadosSolicitacao.indicacaoClinica";
        GuiaFields["dadosSolicitacao.procedimentosSolicitados"] = "dadosSolicitacao.procedimentosSolicitados";
        GuiaFields["dadosExecutante.codigoNaOperadora"] = "dadosExecutante.codigoNaOperadora";
        GuiaFields["dadosExecutante.nomeContratado"] = "dadosExecutante.nomeContratado";
        GuiaFields["dadosExecutante.codigoCNES"] = "dadosExecutante.codigoCNES";
        GuiaFields["tipoAtendimento"] = "tipoAtendimento";
        GuiaFields["indicacaoAcidente"] = "indicacaoAcidente";
        GuiaFields["tipoConsulta"] = "tipoConsulta";
        GuiaFields["motivoEncerramentoAtendimento"] = "motivoEncerramentoAtendimento";
        GuiaFields["procedimentosRealizados"] = "procedimentosRealizados";
        GuiaFields["profissionaisExecutantes"] = "profissionaisExecutantes";
        GuiaFields["dataRealizacaoProcedimentos"] = "dataRealizacaoProcedimentos";
        GuiaFields["observacaoJustificativa"] = "observacaoJustificativa";
        GuiaFields["valorTotalProcedimentos"] = "valorTotalProcedimentos";
        GuiaFields["valorTotalTaxasAlugueis"] = "valorTotalTaxasAlugueis";
        GuiaFields["valorTotalMateriais"] = "valorTotalMateriais";
        GuiaFields["valorTotalOPME"] = "valorTotalOPME";
        GuiaFields["valorTotalMedicamentos"] = "valorTotalMedicamentos";
        GuiaFields["valorTotalGasesMedicinais"] = "valorTotalGasesMedicinais";
        GuiaFields["valorTotalGeral"] = "valorTotalGeral";
        GuiaFields["assinaturaResponsavelAutorizacao"] = "assinaturaResponsavelAutorizacao";
        GuiaFields["assinaturaBeneficiario"] = "assinaturaBeneficiario";
        GuiaFields["assinaturaContratado"] = "assinaturaContratado";
    })(GuiaFields = GuiaSPSADTOpts.GuiaFields || (GuiaSPSADTOpts.GuiaFields = {}));
})(GuiaSPSADTOpts = exports.GuiaSPSADTOpts || (exports.GuiaSPSADTOpts = {}));
//# sourceMappingURL=GuiaSPSADTOpts.js.map