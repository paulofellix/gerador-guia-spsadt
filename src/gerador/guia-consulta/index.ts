import { GeradorDePdf } from './GeradorDePdf'
import { GuiaConsulta } from '../../types'

export class GeradorGuiaConsulta {
  gerarPdf(guia: GuiaConsulta) {
    return new GeradorDePdf(guia).gerar()
  }
}
