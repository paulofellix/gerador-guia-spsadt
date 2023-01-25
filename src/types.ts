export type Field = {
  x: number
  y: number
  width: number
  height: number
}

export type FieldBox = Field & {
  fontSize?: number
  label: string
  background?: string
}

export type FieldText = Field & {
  text: string
  font?: string
  fontSize?: number
  fontColor?: string
  align?: 'left' | 'center' | 'right'
  characterSpacing?: number
  background?: string
}

export type DocOptions = {
  startX: number
  startY: number
  startFieldsX: number
  gapLines: number
  gapFields: number
  fieldLabelSize: number
  userFillOptions: {
    position: 'bottom' | 'right'
    paddingTop: number
    paddingLeft: number
    fontSize: number
    font: 'negrito' | 'normal'
    align: 'left' | 'center' | 'right'
  }
}

export type DocLineType = 'custom' | 'fields' | 'space'
export type DocLine = {
  _index?: number
  _y?: number
  _x?: number
  height: number
  lineType: DocLineType
  fields?: DocField[]
}

export type DocFieldType = 'field' | 'space' | 'text'
export type DocField = {
  id?: string
  fieldType?: DocFieldType
  label?: string
  text?: string
  x?: number
  y?: number
  width?: number
  height?: number
  background?: string
  fontSize?: number
  font?: string
  fontColor?: string
  align?: 'left' | 'center' | 'right'
  characterSpacing?: number
  userFillOptions?: Partial<DocOptions['userFillOptions']>
}

export type DocContent = Pick<DocLine, 'lineType' | 'fields' | 'height'>[]

export type Doc = {
  contentOptions: DocOptions
  content: DocContent
}

export type GuiaConsulta = {
  logo?: any
  nrAtendimento?: string
  nrConta?: string
  registroANS?: string
  numeroGuiaPrestador?: string
  numeroGuiaOperadora?: string
  numeroCarteira?: string
  validadeCarteira?: string
  atendimentoRN?: string
  nomeBeneficiario?: string
  cartaoNacionalSaude?: string
  codigoNaOperadora?: string
  nomeContratado?: string
  codigoCNES?: string
  nomeProfissionalExecutante?: string
  conselhoProfissional?: string
  numeroConselhoProfissional?: string
  ufConselhoProfissional?: string
  codigoCBO?: string
  indicacaoAcidente?: string
  dataAtendimento?: string
  tipoConsulta?: string
  tabela?: string
  codigoProcedimento?: string
  valorProcedimento?: string
  observacao?: string
  assinaturaProfissionalExecutante?: string
  assinaturaBeneficiario?: string
}

export type GuiaSPSADT = {
  logo?: any
  nrAtendimento?: string
  nrConta?: string
  numeroGuiaPrestador?: string
  registroANS?: string
  numeroGuiaPrincipal?: string
  dataAutorizacao?: string
  senha?: string
  dataValidadeSenha?: string
  numeroGuiaOperadora?: string
  numeroCarteira?: string
  validadeCarteira?: string
  nomeBeneficiario?: string
  cartaoNacionalSaude?: string
  atendimentoRN?: string
  dadosSolicitante?: {
    codigoNaOperadora?: string
    nomeContratado?: string
    nomeProfissionalSoliciatante?: string
    conselhoProfissional?: string
    numeroConselhoProfissional?: string
    ufConselhoProfissional?: string
    codigoCBO?: string
    assinaturaProfissionalSoliciatante?: string
  }
  dadosSolicitacao?: {
    caraterAtendimento?: string
    dataSolicitacao?: string
    indicacaoClinica?: string
    procedimentosSolicitados?: {
      tabela?: string
      codigoProcedimento: string
      descricaoProcedimento: string
      quantidadeSolicitada: string
      quantidadeAutorizada: string
    }[]
  }
  dadosExecutante?: {
    codigoNaOperadora?: string
    nomeContratado?: string
    codigoCNES?: string
  }
  tipoAtendimento?: string
  indicacaoAcidente?: string
  tipoConsulta?: string
  motivoEncerramentoAtendimento?: string
  procedimentosRealizados?: {
    dataAtendimento?: string
    horaInicial?: string
    horaFinal?: string
    tabela?: string
    codigoProcedimento?: string
    descricaoProcedimento?: string
    quantidadeExecutada?: string
    viaAcesso?: string
    tecnicaUtilizada?: string
    fatorReducaoAcrescimo?: string
    valorProcedimento?: string
    valorTotal?: string
  }[]
  profissionaisExecutantes?: {
    sequencia?: string
    grauParticipacao?: string
    codigoNaOperadora?: string
    nomeProfissional?: string
    conselhoProfissional?: string
    numeroConselhoProfissional?: string
    ufConselhoProfissional?: string
    codigoCBO?: string
  }[]
  observacaoJustificativa?: string
  valorTotalProcedimentos?: string
  valorTotalTaxasAlugueis?: string
  valorTotalMateriais?: string
  valorTotalOPME?: string
  valorTotalMedicamentos?: string
  valorTotalGasesMedicinais?: string
  valorTotalGeral?: string
  assinaturaResponsavelAutorizacao?: string
  assinaturaBeneficiario?: string
  assinaturaContratado?: string
}
