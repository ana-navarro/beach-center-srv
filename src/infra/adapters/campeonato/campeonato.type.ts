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
    descricao?: string | undefined;
    dataInicio: Date;
    dataFim: Date;
    status: Status;
}

export interface ICampeonatoResponse {
    id: string;
    titulo: string;
    esporte: string;
    descricao: string | null;
    dataInicio: Date;
    dataFim: Date;
    status: Status;
}