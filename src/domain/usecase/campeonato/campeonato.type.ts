import { ICampeonato } from "../../domain/campeonato.js";

export enum Status {
    ABERTO = 'aberto',
    FINALIZADO = 'finalizado',
    EM_ANDAMENTO = 'em_andamento',
    DRAFT = 'draft',
    CANCELADO = 'cancelado',
    PAUSADO = 'pausado',
}

export interface ICampeonatoRequest {
    titulo: string;
    esporte: string;
    descricao?: string;
    dataInicio: Date;
    dataFim: Date;
    status: Status;
}

export type ICampeonatoResponse = ICampeonato;