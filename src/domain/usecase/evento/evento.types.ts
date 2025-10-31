import { IEvento } from "../../domain/evento.js";

export interface IParticipanteSoloEvento {
    tipo: 'individual';
    participante_id: string;
}

export interface IParticipanteDuplaEvento {
    tipo: 'dupla';
    participante1_id: string;
    participante2_id: string;
}

export interface IParticipanteTimeEvento {
    tipo: 'time';
    nome_time: string;
    membros_id: string[];
}

export enum StatusEvento {
    ABERTO = 'aberto',
    FINALIZADO = 'finalizado',
    EM_ANDAMENTO = 'em_andamento',
    DRAFT = 'draft',
    CANCELADO = 'cancelado',
    PAUSADO = 'pausado',
}   

export interface IEventoRequest {
    titulo: string;
    vagas: number;
    evento_tipo: IParticipanteSoloEvento | IParticipanteDuplaEvento | IParticipanteTimeEvento;
    campeonato_id: string;
    repescagem_id?: string[] | null;
    status: StatusEvento;
    grupo_id?: string[] | null;
    final_id?: string[] | null;
    vencedor_id?: string | null;
}

export type IEventoResponse = IEvento;