export interface IReserva {
    id: string;
    agenda_id: string;
    nome: string;
    telefone: string;
    email: string;
    pago: boolean;
    precisa_materias: boolean;
    materiais?: string[];
}