export interface IReservaRequest {
    agenda_id: string;
    nome: string;
    telefone: string;
    email: string;
    pago: boolean;
    precisa_materias: boolean;
    materiais?: string[];
}

export interface IReservaResponse {
    id: string;
    agenda_id: string;
    nome: string;
    telefone: string;
    email: string;
    pago: boolean;
    precisa_materias: boolean;
    materiais?: string[];
}