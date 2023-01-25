import { GuiaConsulta } from '../../types'
import { Render } from '../render/Render'
import { GuiaConsultaOpts } from './GuiaConsultaOpts'

export class GeradorDePdf extends Render {
  constructor(private guia: GuiaConsulta) {
    super(GuiaConsultaOpts.docStruct, GuiaConsultaOpts.pdfOptions)
    this.fillData()
  }

  fillData() {
    for (const key in this.guia) {
      if (Object.prototype.hasOwnProperty.call(this.guia, key)) {
        const value = this.guia[key]
        if (value) {
          this.fillField(key, value)
        }
      }
    }
  }
}
