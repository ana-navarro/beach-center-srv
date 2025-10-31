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

export interface IEvento {
    id: string;
    titulo: string;
    vagas: number;
    evento_tipo: IParticipanteSoloEvento | IParticipanteDuplaEvento | IParticipanteTimeEvento;
    campeonato_id: string;
    repescagem_id?: string[];
    status: StatusEvento;
    grupo_id?: string[];
    final_id?: string[];
    vencedor_id?: string;
}