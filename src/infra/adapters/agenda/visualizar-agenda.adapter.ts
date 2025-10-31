import Agenda from "../../schemas/agenda.js";
import { IAgendaResponse } from "./agenda.type.js";

class VisualizarAgendaAdapter {
    async execute(id: string): Promise<IAgendaResponse>  {
        try {
            const response = await Agenda.findById(id);

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
            console.log("Erro ao visualizar a agenda:", error);
            throw new Error("Erro ao visualizar a agenda");
        }
    }
}

export default VisualizarAgendaAdapter;