import fs from 'fs'
import path from 'path'
import { GeradorGuiaConsulta, GuiaConsulta } from '../../lib'
import { faker } from '@faker-js/faker'

const pathDoArquivoPdf = path.join(__dirname, 'guia-consulta.pdf')
const logoPath = path.join(__dirname, './bradesco-saude-logo.png')
const logoBuf = fs.readFileSync(logoPath)

console.log(`${new Date().toJSON()} - Recriando PDF...`)

if (fs.existsSync(pathDoArquivoPdf)) {
  fs.unlinkSync(pathDoArquivoPdf)
}

const guia: GuiaConsulta = {
  logo: logoBuf,
  nrAtendimento: faker.random.numeric(6),
  nrConta: faker.random.numeric(6),
  registroANS: faker.random.numeric(6),
  numeroGuiaPrestador: faker.random.numeric(8),
  numeroGuiaOperadora: faker.random.numeric(8),
  numeroCarteira: faker.random.numeric(15),
  validadeCarteira: faker.date.future().toISOString().split('T')[0].split('-').reverse().join('/'),
  atendimentoRN: 'N',
  nomeBeneficiario:
    faker.name.firstName() + ' ' + faker.name.middleName() + ' ' + faker.name.lastName(),
  cartaoNacionalSaude: faker.random.numeric(15),
  codigoNaOperadora: faker.random.numeric(4),
  nomeContratado: faker.company.name() + ' ' + faker.company.companySuffix(),
  codigoCNES: faker.random.numeric(7),
  nomeProfissionalExecutante: faker.name.firstName() + ' ' + faker.name.lastName(),
  conselhoProfissional: faker.helpers.arrayElement([
    'CRM',
    'CRO',
    'CRF',
    'CRP',
    'CRN',
    'CRQ',
    'COREN',
    'OUTROS',
  ]),
  numeroConselhoProfissional: faker.random.numeric(4),
  ufConselhoProfissional: faker.helpers.arrayElement([
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ]),
  codigoCBO: faker.random.numeric(6),
  indicacaoAcidente: 'N',
  dataAtendimento: faker.date.past().toISOString().split('T')[0].split('-').reverse().join('/'),
  tipoConsulta: faker.random.numeric(2, { allowLeadingZeros: true }),
  tabela: faker.random.numeric(2, { allowLeadingZeros: true }),
  codigoProcedimento: faker.random.numeric(8, { allowLeadingZeros: true }),
  valorProcedimento: faker.datatype.number({ min: 1, max: 9999, precision: 2 }).toFixed(2),
  observacao: faker.lorem.paragraph(),
}

const geradorGuiaTasy = new GeradorGuiaConsulta()
const pdf = geradorGuiaTasy.gerarPdf(guia)
pdf.pipe(fs.createWriteStream(pathDoArquivoPdf))
