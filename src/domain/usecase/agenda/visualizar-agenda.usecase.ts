import VisualizarAgendaAdapter from "../../../infra/adapters/agenda/visualizar-agenda.adapter.js";
import { IAgendaResponse } from "./agenda.type.js";

class VisualizarAgendaUseCase {
    constructor(private adapter: VisualizarAgendaAdapter) {}

    async execute(id: string): Promise<IAgendaResponse> {
        const response = await this.adapter.execute(id);
        return {
            id: response.id,
            dia: response.dia,
            horarioInicio: response.horarioInicio,
            horaFim: response.horaFim,
            local: response.local,
            quadra: response.quadra,
            disponivel: response.disponivel,
        };
    }
}

export default VisualizarAgendaUseCase;