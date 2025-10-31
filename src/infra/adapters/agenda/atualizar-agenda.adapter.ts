import Agenda from "../../schemas/agenda.js";
import { IAgendaRequest, IAgendaResponse } from "./agenda.type.js";

interface IAtualizarAgendaRequest {
    id: string;
    data: IAgendaRequest;
}

class AtualizarAgendaAdapter {
    async execute({ id, data }: IAtualizarAgendaRequest): Promise<IAgendaResponse>  {
        const payload: IAgendaRequest = {
            dia: data.dia,
            horarioInicio: data.horarioInicio,
            horaFim: data.horaFim,
            local: data.local,
            quadra: data.quadra,
            disponivel: data.disponivel,
        };

        try {
            const response = await Agenda.findByIdAndUpdate(id, payload);

            if (!response) {
                throw new Error("Agenda não encontrada");
            }

            const result: IAgendaResponse = {
                id: response._id.toString(),
                dia: response.dia,
                horarioInicio: response.horarioInicio,
                horaFim: response.horaFim,
                local: response.local,
                quadra: response.quadra,
                disponivel: response.disponivel,
            };

            return result;
        } catch (error) {
            console.log("Erro ao atualizar a agenda:", error);
            throw new Error("Erro ao atualizar a agenda");
        }
    }
}

export default AtualizarAgendaAdapter;