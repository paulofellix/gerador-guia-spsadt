import { GuiaSPSADT } from '../../types'
import { GeradorDePdf } from './GeradorDePdf'

export class GeradorGuiaSPSADT {
  gerarPdf(guia: GuiaSPSADT) {
    return new GeradorDePdf(guia).gerar()
  }
}
