export enum Status {
    ABERTO = 'aberto',
    FINALIZADO = 'finalizado',
    EM_ANDAMENTO = 'em_andamento',
    DRAFT = 'draft',
    CANCELADO = 'cancelado',
    PAUSADO = 'pausado',
}

export interface ICampeonato {
    id: string;
    titulo: string;
    esporte: string;
    descricao?: string;
    dataInicio: Date;
    dataFim: Date;
    status: Status;
}