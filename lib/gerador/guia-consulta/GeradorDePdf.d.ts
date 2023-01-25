import { GuiaConsulta } from '../../types';
import { Render } from '../render/Render';
export declare class GeradorDePdf extends Render {
    private guia;
    constructor(guia: GuiaConsulta);
    fillData(): void;
}
