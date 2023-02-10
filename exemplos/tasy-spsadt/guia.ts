import fs from 'fs'
import path from 'path'
import { GeradorGuiaSPSADT, GuiaSPSADT } from '../../lib'
import { faker } from '@faker-js/faker'

const pathDoArquivoPdf = path.join(__dirname, 'guia-spsadt.pdf')
const logoPath = path.join(__dirname, './bradesco-saude-logo.png')
const logoBuf = fs.readFileSync(logoPath)
console.log(`${new Date().toJSON()} - Recriando PDF...`)

if (fs.existsSync(pathDoArquivoPdf)) {
  fs.unlinkSync(pathDoArquivoPdf)
}

const conselhos = [
  'CRM',
  'CRF',
  'CRFA',
  'CRN',
  'CRP',
  'CRPRE',
  'CRQ',
  'CRRC',
  'CRESS',
  'COREN',
  'CRO',
  'CROA',
  'CRP',
  'CRRC',
  'CRV',
  'CRVM',
  'CRF',
  'CRFA',
  'CRN',
  'CRP',
  'CRPRE',
  'CRQ',
  'CRRC',
  'CRESS',
  'COREN',
  'CRO',
  'CROA',
  'CRP',
  'CRRC',
  'CRV',
  'CRVM',
]

const guia: GuiaSPSADT = {
  logo: logoBuf,
  nrAtendimento: faker.random.numeric(8).toString(),
  nrConta: faker.random.numeric(8).toString(),
  registroANS: faker.random.numeric(6).toString(),
  numeroGuiaPrestador: faker.random.numeric(9).toString(),
  numeroGuiaPrincipal: faker.random.numeric(9).toString(),
  dataAutorizacao: faker.date.past().toISOString().slice(0, 10).split('-').reverse().join('/'),
  senha: faker.random.numeric(6).toString(),
  dataValidadeSenha: faker.date.future().toISOString().slice(0, 10).split('-').reverse().join('/'),
  numeroGuiaOperadora: faker.random.numeric(9).toString(),
  numeroCarteira: faker.random.numeric(9).toString(),
  validadeCarteira: faker.date.future().toISOString().slice(0, 10).split('-').reverse().join('/'),
  nomeBeneficiario: faker.name.fullName(),
  cartaoNacionalSaude: faker.random.numeric(15).toString(),
  atendimentoRN: faker.datatype.boolean() ? 'S' : 'N',
  dadosSolicitante: {
    codigoNaOperadora: faker.random.numeric(9).toString(),
    nomeContratado: faker.company.name() + ' ' + faker.company.companySuffix().toLocaleUpperCase(),
    nomeProfissionalSolicitante: faker.name.fullName(),
    conselhoProfissional: faker.helpers.arrayElement(conselhos),
    numeroConselhoProfissional: faker.random.numeric(6).toString(),
    ufConselhoProfissional: faker.address.stateAbbr(),
    codigoCBO: faker.random.numeric(6).toString(),
    assinaturaProfissionalSoliciatante: faker.name.fullName(),
  },
  dadosSolicitacao: {
    caraterAtendimento: faker.random.numeric(2, { allowLeadingZeros: true }).toString(),
    dataSolicitacao: faker.date.past().toISOString().slice(0, 10).split('-').reverse().join('/'),
    indicacaoClinica: faker.random.numeric(2, { allowLeadingZeros: true }).toString(),
    procedimentosSolicitados: Array.from({ length: 5 }).map((_) => ({
      tabela: '22',
      codigoProcedimento: faker.random.numeric(8, { allowLeadingZeros: true }).toString(),
      descricaoProcedimento: faker.random.words(5),
      quantidadeAutorizada: faker.random.numeric(1).toString(),
      quantidadeSolicitada: faker.random.numeric(1).toString(),
    })),
  },
  dadosExecutante: {
    codigoNaOperadora: faker.random.numeric(9).toString(),
    nomeContratado: faker.company.name() + ' ' + faker.company.companySuffix().toLocaleUpperCase(),
    codigoCNES: faker.random.numeric(7).toString(),
  },
  tipoAtendimento: faker.helpers.arrayElement(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
  indicacaoAcidente: faker.helpers.arrayElement(['S', 'N']),
  tipoConsulta: faker.helpers.arrayElement(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
  motivoEncerramentoAtendimento: faker.helpers.arrayElement([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ]),
  procedimentosRealizados: Array.from({ length: 5 }).map((_) => ({
    dataAtendimento: faker.date.past().toISOString().slice(0, 10).split('-').reverse().join('/'),
    horaInicial: faker.date.past().toISOString().slice(11, 19),
    horaFinal: faker.date.past().toISOString().slice(11, 19),
    tabela: '22',
    codigoProcedimento: faker.random.numeric(8, { allowLeadingZeros: true }).toString(),
    descricaoProcedimento: faker.random.words(5),
    quantidadeExecutada: faker.random.numeric(1).toString(),
    viaAcesso: faker.helpers.arrayElement(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
    tecnicaUtilizada: faker.helpers.arrayElement(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
    fatorReducaoAcrescimo: faker.commerce.price(0, 2).toString().replace('.', ','),
    valorProcedimento: faker.commerce.price(0, 100).toString().replace('.', ','),
    valorTotal: faker.commerce.price(0, 100).toString().replace('.', ','),
  })),
  profissionaisExecutantes: Array.from({ length: 5 }).map((_) => ({
    grauParticipacao: faker.random.numeric(2, { allowLeadingZeros: true }).toString(),
    codigoNaOperadora: faker.random.numeric(11).toString(),
    nomeProfissional: faker.name.fullName(),
    conselhoProfissional: faker.random.numeric(2, { allowLeadingZeros: true }).toString(),
    numeroConselhoProfissional: faker.random.numeric(4).toString(),
    ufConselhoProfissional: faker.address.stateAbbr(),
    codigoCBO: faker.random.numeric(6).toString(),
  })),
  observacaoJustificativa: faker.lorem.paragraph(7),
  valorTotalProcedimentos: faker.commerce.price(0, 100).toString().replace('.', ','),
  valorTotalTaxasAlugueis: faker.commerce.price(0, 100).toString().replace('.', ','),
  valorTotalMateriais: faker.commerce.price(0, 100).toString().replace('.', ','),
  valorTotalOPME: faker.commerce.price(0, 100).toString().replace('.', ','),
  valorTotalMedicamentos: faker.commerce.price(0, 100).toString().replace('.', ','),
  valorTotalGasesMedicinais: faker.commerce.price(0, 100).toString().replace('.', ','),
  valorTotalGeral: faker.commerce.price(0, 100).toString().replace('.', ','),
}

const geradorGuiaTasy = new GeradorGuiaSPSADT()
const pdf = geradorGuiaTasy.gerarPdf(guia)
pdf.pipe(fs.createWriteStream(pathDoArquivoPdf))
