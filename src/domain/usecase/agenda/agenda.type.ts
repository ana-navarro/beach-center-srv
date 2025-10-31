import { IAgenda } from "../../domain/agenda.js";

export interface IAgendaRequest {
    dia: Date;
    horarioInicio: string;
    horaFim: string;
    local: string;
    quadra: string;
    disponivel: boolean;
}

export type IAgendaResponse = IAgenda;