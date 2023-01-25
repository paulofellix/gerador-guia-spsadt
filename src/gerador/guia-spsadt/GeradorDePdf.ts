import { GuiaSPSADT } from '../../types'
import { Render } from '../render/Render'
import { GuiaSPSADTOpts } from './GuiaSPSADTOpts'

export class GeradorDePdf extends Render {
  constructor(private guia: GuiaSPSADT) {
    super(GuiaSPSADTOpts.doc, GuiaSPSADTOpts.pdfOptions)
    this.fillData()
    this.drawAdditionalFields()
    this.fillAdditionalFields()
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

  drawAdditionalFields() {
    this.drawProcedimentosSolicitados()
    this.drawProcedimentosExecutados()
    this.drawProfissionaisExecutantes()
    this.drawDataRealizacaoSerie()
    this.drawAssinaturas()
  }

  drawProcedimentosSolicitados() {
    const procedimentosSolicitadosField = this.getField(
      GuiaSPSADTOpts.GuiaFields['dadosSolicitacao.procedimentosSolicitados'],
    )

    let { x: positionX, y: positionY } = procedimentosSolicitadosField
    this.pdf.font('negrito').fontSize(5)

    this.pdf.text('24 - Tabela', (positionX += 10), positionY)
    this.pdf.text('25 - Código do Procedimento ou Item Assistencial', (positionX += 30), positionY)
    this.pdf.text('26 - Descrição', (positionX += 140), positionY)
    this.pdf.text('27 - Qtde.Solic.', (positionX += 420), positionY)
    this.pdf.text('28 - Qtde.Aut.', (positionX += 70), positionY)

    this.pdf
      .lineWidth(0.7)
      .moveTo(procedimentosSolicitadosField.x, (positionY += 20))
      .lineTo(808, positionY)
      .stroke()

    this.pdf
      .font('normal')
      .fontSize(6)
      .text('1', procedimentosSolicitadosField.x + 4, positionY - 8)

    for (let i = 0; i < 4; i++) {
      this.pdf
        .lineWidth(0.7)
        .moveTo(procedimentosSolicitadosField.x, (positionY += 11.2))
        .lineTo(808, positionY)
        .stroke()

      this.pdf
        .font('normal')
        .fontSize(6)
        .text((i + 2).toString(), procedimentosSolicitadosField.x + 4, positionY - 8)
    }
  }

  drawProcedimentosExecutados() {
    const procedimentoExecutados = this.getField(
      GuiaSPSADTOpts.GuiaFields['procedimentosRealizados'],
    )

    let { x: positionX, y: positionY } = procedimentoExecutados
    this.pdf.font('negrito').fontSize(5)

    this.pdf.text('36 - Data', (positionX += 6), positionY)
    this.pdf.text('37 - Hora Inicial', (positionX += 50), positionY)
    this.pdf.text('38 - Hora Final', (positionX += 43), positionY)
    this.pdf.text('39 - Tabela', (positionX += 50), positionY)
    this.pdf.text('40 - Código do Procedimento', (positionX += 45), positionY)
    this.pdf.text('41 - Descrição', (positionX += 85), positionY)
    this.pdf.text('42 - Qtde', (positionX += 200), positionY)
    this.pdf.text('43 - Via', (positionX += 40), positionY)
    this.pdf.text('44 - Tec.', (positionX += 30), positionY)
    this.pdf.text('45 - Fator Red/Acresc', (positionX += 30), positionY)
    this.pdf.text('46 - Valor Unitário (R$)', (positionX += 70), positionY)
    this.pdf.text('47 - Valor Total (R$)', (positionX += 76), positionY)

    this.pdf
      .lineWidth(0.7)
      .moveTo(procedimentoExecutados.x, (positionY += 20))
      .lineTo(808, positionY)
      .stroke()

    this.pdf
      .font('normal')
      .fontSize(6)
      .text('1', procedimentoExecutados.x + 4, positionY - 8)

    for (let i = 0; i < 4; i++) {
      this.pdf
        .lineWidth(0.7)
        .moveTo(procedimentoExecutados.x, (positionY += 11.2))
        .lineTo(808, positionY)
        .stroke()

      this.pdf
        .font('normal')
        .fontSize(6)
        .text((i + 2).toString(), procedimentoExecutados.x + 4, positionY - 8)
    }
  }

  drawProfissionaisExecutantes() {
    const profissionaisExecutantes = this.getField(
      GuiaSPSADTOpts.GuiaFields['profissionaisExecutantes'],
    )

    let { x: positionX, y: positionY } = profissionaisExecutantes
    this.pdf.font('negrito').fontSize(5)

    this.pdf.text('48 - Seq.Ref.', positionX + 1, positionY)
    this.pdf.text('49 - Gr. Part.', (positionX += 50), positionY)
    this.pdf.text('50 - Código na Operadora/CPF', (positionX += 50), positionY)
    this.pdf.text('51 - Nome do Profissional', (positionX += 100), positionY)
    this.pdf.text('52 - Conselho Profissional', (positionX += 230), positionY)
    this.pdf.text('53 - Número do Conselho', (positionX += 130), positionY)
    this.pdf.text('54 - UF', (positionX += 80), positionY)
    this.pdf.text('55 - Código CBO', (positionX += 30), positionY)

    this.pdf
      .lineWidth(0.7)
      .moveTo(profissionaisExecutantes.x, (positionY += 20))
      .lineTo(808, positionY)
      .stroke()

    this.pdf
      .font('normal')
      .fontSize(6)
      .text('1', profissionaisExecutantes.x + 4, positionY - 8)

    for (let i = 0; i < 4; i++) {
      this.pdf
        .lineWidth(0.7)
        .moveTo(profissionaisExecutantes.x, (positionY += 11.2))
        .lineTo(808, positionY)
        .stroke()

      this.pdf
        .font('normal')
        .fontSize(6)
        .text((i + 2).toString(), profissionaisExecutantes.x + 4, positionY - 8)
    }
  }

  drawDataRealizacaoSerie() {
    const dataRealizacaoSerie = this.getField(GuiaSPSADTOpts.GuiaFields.dataRealizacaoProcedimentos)
    const { x } = dataRealizacaoSerie
    let line1X = x + 1
    let line2X = x + 1
    for (let i = 1; i <= 10; i++) {
      if (i % 2 === 0) {
        this.pdf
          .font('normal')
          .fontSize(5)
          .text(
            `${i} - ______/______/______       _______________________`,
            line1X,
            dataRealizacaoSerie.y + 20,
          )
        line1X += 155
      } else {
        this.pdf
          .font('normal')
          .fontSize(5)
          .text(
            `${i} - ______/______/______       _______________________`,
            line2X,
            dataRealizacaoSerie.y + 10,
          )
        line2X += 155
      }
    }
  }

  drawAssinaturas() {
    const assinaturaResponsavel = this.getField(
      GuiaSPSADTOpts.GuiaFields.assinaturaResponsavelAutorizacao,
    )
    this.pdf
      .font('normal')
      .fontSize(6)
      .text('_______/_______/_______', assinaturaResponsavel.x + 3, assinaturaResponsavel.y + 8)
  }

  fillAdditionalFields() {
    this.fillProcedimentosSolicitados()
    this.fillProcedimentosRealizados()
    this.fillProfissionaisExecutantes()
  }

  fillProcedimentosSolicitados() {
    if (!this.guia.dadosSolicitacao.procedimentosSolicitados) return

    const procedimentosSolicitados = this.getField(
      GuiaSPSADTOpts.GuiaFields['dadosSolicitacao.procedimentosSolicitados'],
    )

    let { x: positionX, y: positionY } = procedimentosSolicitados
    positionX += 12
    positionY += 12

    this.pdf.font('normal').fontSize(7)

    this.guia.dadosSolicitacao.procedimentosSolicitados.forEach((procedimento, index) => {
      if (index > 0) {
        positionY += 11.2
      }

      this.pdf.text(procedimento.tabela, positionX + 6, positionY)
      this.pdf.text(procedimento.codigoProcedimento, positionX + 76, positionY)
      this.pdf.text(procedimento.descricaoProcedimento, positionX + 168, positionY)
      this.pdf.text(procedimento.quantidadeSolicitada.toString(), positionX + 615, positionY)
      this.pdf.text(procedimento.quantidadeSolicitada.toString(), positionX + 680, positionY)
    })
  }

  fillProcedimentosRealizados() {
    if (!this.guia.procedimentosRealizados) return

    const procedimentosRealizados = this.getField(GuiaSPSADTOpts.GuiaFields.procedimentosRealizados)

    let { x: positionX, y: positionY } = procedimentosRealizados
    positionX += 12
    positionY += 12

    this.pdf.font('normal').fontSize(6)

    this.guia.procedimentosRealizados.forEach((procedimento, index) => {
      if (index > 0) {
        positionY += 11.2
      }

      this.pdf.text(procedimento.dataAtendimento, positionX + 5, positionY)
      this.pdf.text(procedimento.horaInicial, positionX + 45, positionY)
      this.pdf.text(procedimento.horaFinal, positionX + 90, positionY)
      this.pdf.text(procedimento.tabela, positionX + 155, positionY)
      this.pdf.text(procedimento.codigoProcedimento, positionX + 223, positionY)
      this.pdf.text(procedimento.descricaoProcedimento, positionX + 267, positionY)
      this.pdf.text(procedimento.quantidadeExecutada.toString(), positionX + 485, positionY)
      this.pdf.text(procedimento.viaAcesso, positionX + 520, positionY)
      this.pdf.text(procedimento.tecnicaUtilizada, positionX + 550, positionY)
      this.pdf.text(procedimento.fatorReducaoAcrescimo, positionX + 605, positionY)
      this.pdf.text(procedimento.valorProcedimento.toString(), positionX + 660, positionY, {
        align: 'right',
        width: 30,
      })
      this.pdf.text(procedimento.valorTotal.toString(), positionX + 728, positionY, {
        align: 'right',
        width: 30,
      })
    })
  }

  fillProfissionaisExecutantes() {
    if (!this.guia.profissionaisExecutantes) return

    const profissionaisExecutantes = this.getField(
      GuiaSPSADTOpts.GuiaFields.profissionaisExecutantes,
    )

    let { x: positionX, y: positionY } = profissionaisExecutantes
    positionX += 12
    positionY += 12

    this.pdf.font('normal').fontSize(6)

    this.guia.profissionaisExecutantes.forEach((profissional, index) => {
      if (index > 0) {
        positionY += 11.2
      }

      this.pdf.text(profissional.grauParticipacao, positionX + 40, positionY)
      this.pdf.text(profissional.codigoNaOperadora, positionX + 88, positionY)
      this.pdf.text(profissional.nomeProfissional, positionX + 188, positionY)
      this.pdf.text(profissional.conselhoProfissional, positionX + 418, positionY)
      this.pdf.text(profissional.numeroConselhoProfissional, positionX + 548, positionY)
      this.pdf.text(profissional.ufConselhoProfissional, positionX + 628, positionY)
      this.pdf.text(profissional.codigoCBO, positionX + 658, positionY)
    })
  }
}
