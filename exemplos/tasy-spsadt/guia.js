var fs = require('fs')
var path = require('path')
var pathDoArquivoPdf = path.join(__dirname, 'guia-spsadt.pdf')

console.log(`${new Date().toJSON()} - Recriando PDF...`)
var lib = require('../../lib')
if (fs.existsSync(pathDoArquivoPdf)) {
  fs.unlinkSync(pathDoArquivoPdf)
}

const geradorGuiaTasy = new lib.GeradorGuiaSPSADT()
const pdf = geradorGuiaTasy.gerarPdf({})
pdf.pipe(fs.createWriteStream(pathDoArquivoPdf))
