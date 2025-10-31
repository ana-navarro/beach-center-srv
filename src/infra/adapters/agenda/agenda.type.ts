export interface IAgendaRequest {
    dia: Date;
    horarioInicio: string;
    horaFim: string;
    local: string;
    quadra: string;
    disponivel: boolean;
}

export interface IAgendaResponse {
    id: string;
    dia: Date;
    horarioInicio: string;
    horaFim: string;
    local: string;
    quadra: string;
    disponivel: boolean;
}