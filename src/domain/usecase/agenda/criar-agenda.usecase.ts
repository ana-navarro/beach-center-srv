import CriarAgendaAdapter from "../../../infra/adapters/agenda/criar-agenda.adapter.js";
import { IAgendaRequest, IAgendaResponse } from "./agenda.type.js";

class CriarAgendaUseCase {
    constructor(private adapter: CriarAgendaAdapter) {}

    async execute(request: IAgendaRequest): Promise<IAgendaResponse> {
        const response = await this.adapter.execute(request);
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

export default CriarAgendaUseCase;