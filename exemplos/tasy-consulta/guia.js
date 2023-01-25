var fs = require('fs')
var path = require('path')
var pathDoArquivoPdf = path.join(__dirname, 'guia-consulta.pdf')

console.log(`${new Date().toJSON()} - Recriando PDF...`)

var lib = require('../../lib')
if (fs.existsSync(pathDoArquivoPdf)) {
  fs.unlinkSync(pathDoArquivoPdf)
}

const guia = {
  registroANS: '1234567',
  guiaP: '123123',
  numeroCarteira: '126636',
}

const geradorGuiaTasy = new lib.GeradorGuiaConsulta()
const pdf = geradorGuiaTasy.gerarPdf(guia)
pdf.pipe(fs.createWriteStream(pathDoArquivoPdf))
