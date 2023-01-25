import { Doc } from '../../types'

export namespace GuiaConsultaOpts {
  export const pdfOptions: PDFKit.PDFDocumentOptions = {
    bufferPages: true,
    layout: 'portrait',
    margins: {
      top: 28.3465,
      right: 28.3465,
      bottom: 56.6929,
      left: 28.3465,
    },
    size: 'a4',
  }

  export const docStruct: Doc = {
    contentOptions: {
      startX: pdfOptions.margins.left,
      startY: pdfOptions.margins.top,
      startFieldsX: pdfOptions.margins.left + 4,
      gapLines: 3,
      gapFields: 5,
      fieldLabelSize: 5,
      userFillOptions: {
        position: 'bottom',
        paddingTop: 0,
        paddingLeft: 3,
        fontSize: 8,
        font: 'normal',
        align: 'left',
      },
    },
    content: [
      {
        lineType: 'custom',
        height: 33,
        fields: [
          {
            fieldType: 'text',
            x: 0,
            y: 11,
            width: 538,
            font: 'negrito',
            fontSize: 10,
            height: 10,
            text: 'GUIA DE CONSULTA',
            align: 'center',
            characterSpacing: 0.3,
          },
          {
            id: 'numeroGuiaPrestador',
            fieldType: 'text',
            x: 308,
            y: 24,
            width: 60,
            font: 'normal',
            fontSize: 5,
            height: 5,
            text: '2 - Nº Guia no Prestador: ',
            characterSpacing: 0.1,
            userFillOptions: {
              position: 'right',
              fontSize: 5,
              paddingLeft: -5,
              paddingTop: -1,
              font: 'negrito',
            },
          },
          {
            fieldType: 'text',
            x: 513,
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
            x: 465,
            y: 8,
            width: 40,
            font: 'negrito',
            fontSize: 8,
            height: 8,
            text: 'Atend.:',
            userFillOptions: {
              position: 'right',
              font: 'negrito',
              paddingLeft: -15,
            },
          },
          {
            id: 'nrConta',
            fieldType: 'text',
            x: 468,
            y: 15,
            width: 40,
            font: 'negrito',
            fontSize: 8,
            height: 8,
            text: 'Conta:',
            userFillOptions: {
              position: 'right',
              font: 'negrito',
              paddingLeft: -18,
            },
          },
        ],
      },
      {
        lineType: 'fields',
        height: 22,
        fields: [
          {
            id: 'registroANS',
            fieldType: 'field',
            label: '1 - Registro ANS',
            width: 90,
            userFillOptions: {
              position: 'bottom',
              paddingTop: 0,
              paddingLeft: 3,
              fontSize: 8,
            },
          },
          {
            id: 'numeroGuiaOperadora',
            fieldType: 'field',
            label: '3 - Número da Guia Atribuído pela Operadora',
            width: 148,
          },
        ],
      },
      {
        lineType: 'custom',
        height: 7,
        fields: [
          {
            fieldType: 'text',
            x: 0,
            y: 0,
            width: 531,
            height: 8,
            font: 'negrito',
            fontSize: 5,
            text: 'Dados do Beneficiário',
            background: 'silver',
          },
        ],
      },
      {
        lineType: 'fields',
        height: 22,
        fields: [
          {
            id: 'numeroCarteira',
            fieldType: 'field',
            label: '4 - Número da carteira',
            width: 222,
          },
          {
            id: 'validadeCarteira',
            fieldType: 'field',
            label: '5 - Validade da carteira',
            width: 120,
          },
          {
            id: 'atendimentoRN',
            fieldType: 'field',
            label: '6 - Atendimento a RN (Sim ou Não)',
            width: 90,
            userFillOptions: {
              align: 'center',
            },
          },
        ],
      },
      {
        lineType: 'fields',
        height: 23,
        fields: [
          {
            id: 'nomeBeneficiario',
            fieldType: 'field',
            label: '7 - Nome',
            width: 315,
          },
          {
            id: 'cartaoNacionalSaude',
            fieldType: 'field',
            label: '8 - Cartão Nacional de Saúde',
            width: 209,
          },
        ],
      },
      {
        lineType: 'custom',
        height: 7,
        fields: [
          {
            fieldType: 'text',
            x: 0,
            y: 0,
            width: 531,
            height: 8,
            font: 'negrito',
            fontSize: 5,
            text: 'Dados do Contratado',
            background: 'silver',
          },
        ],
      },
      {
        lineType: 'fields',
        height: 18,
        fields: [
          {
            id: 'codigoNaOperadora',
            fieldType: 'field',
            label: '9 - Código na Operadora',
            width: 157,
          },
          {
            id: 'nomeContratado',
            fieldType: 'field',
            label: '10 - Nome do Contratado',
            width: 307,
          },
          {
            id: 'codigoCNES',
            fieldType: 'field',
            label: '11 - Código CNES',
            width: 55,
          },
        ],
      },
      {
        lineType: 'fields',
        height: 18,
        fields: [
          {
            id: 'nomeProfissionalExecutante',
            fieldType: 'field',
            label: '12 - Nome do Profissional Executante',
            width: 280,
          },
          {
            id: 'conselhoProfissional',
            fieldType: 'field',
            label: '13 - Conselho Profisional',
            width: 73,
          },
          {
            id: 'numeroConselhoProfissional',
            fieldType: 'field',
            label: '14 - Número do Conselho',
            width: 73,
          },
          {
            id: 'ufConselhoProfissional',
            fieldType: 'field',
            label: '15 - UF',
            width: 28,
          },
          {
            id: 'codigoCBO',
            fieldType: 'field',
            label: '16 - Código CBO',
            width: 55,
          },
        ],
      },
      {
        lineType: 'custom',
        height: 7,
        fields: [
          {
            fieldType: 'text',
            x: 0,
            y: 0,
            width: 531,
            height: 8,
            font: 'negrito',
            fontSize: 5,
            text: 'Hipótese Diagnóstica ',
            background: 'silver',
          },
        ],
      },
      {
        lineType: 'fields',
        height: 19,
        fields: [
          {
            id: 'indicacaoAcidente',
            fieldType: 'field',
            label: '17 - Indicação de Acidente (acidente ou doença relacionada)',
            width: 157,
            userFillOptions: {
              align: 'center',
            },
          },
        ],
      },
      {
        lineType: 'custom',
        height: 7,
        fields: [
          {
            fieldType: 'text',
            x: 0,
            y: 0,
            width: 531,
            height: 8,
            font: 'negrito',
            fontSize: 5,
            text: 'Dados do Atendimento / Procedimento Realizado',
            background: 'silver',
          },
        ],
      },
      {
        lineType: 'fields',
        height: 20,
        fields: [
          {
            id: 'dataAtendimento',
            fieldType: 'field',
            label: '18 - Data do Atendimento',
            width: 84,
          },
          {
            id: 'tipoConsulta',
            fieldType: 'field',
            label: '19 - Tipo de Consulta',
            width: 54,
            userFillOptions: {
              align: 'center',
            },
          },
          {
            fieldType: 'space',
            width: 53,
          },
          {
            id: 'tabela',
            fieldType: 'field',
            label: '20 - Tabela',
            width: 43,
          },
          {
            id: 'codigoProcedimento',
            fieldType: 'field',
            label: '21 - Código do Procedimento',
            width: 160,
          },
          {
            id: 'valorProcedimento',
            fieldType: 'field',
            label: '22 - Valor do Procedimento',
            width: 109,
            userFillOptions: {
              align: 'right',
            },
          },
        ],
      },
      {
        lineType: 'fields',
        height: 80,
        fields: [
          {
            id: 'observacao',
            fieldType: 'field',
            label: '23 - Observação',
            width: 528,
            background: '#f2f2f2',
            userFillOptions: {
              paddingTop: -25,
            },
          },
        ],
      },
      {
        lineType: 'fields',
        height: 35,
        fields: [
          {
            id: 'assinaturaProfissionalExecutante',
            fieldType: 'field',
            label: '24 - Assinatura do Profissional Executante',
            width: 291,
            background: '#f2f2f2',
          },
          {
            id: 'assinaturaBeneficiario',
            fieldType: 'field',
            label: '25 - Assinatura do Beneficiário ou Responsável',
            width: 232,
            background: '#f2f2f2',
          },
        ],
      },
    ],
  }
}
