import { GuiaSPSADT } from '../../types';
import { Render } from '../render/Render';
export declare class GeradorDePdf extends Render {
    private guia;
    constructor(guia: GuiaSPSADT);
    fillData(): void;
    drawAdditionalFields(): void;
    drawProcedimentosSolicitados(): void;
    drawProcedimentosExecutados(): void;
    drawProfissionaisExecutantes(): void;
    drawDataRealizacaoSerie(): void;
    drawAssinaturas(): void;
    fillAdditionalFields(): void;
    fillProcedimentosSolicitados(): void;
    fillProcedimentosRealizados(): void;
    fillProfissionaisExecutantes(): void;
}
