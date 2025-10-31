import AtualizarAgendaAdapter from "../../../infra/adapters/agenda/atualizar-agenda.adapter.js"
import { IAgendaRequest, IAgendaResponse } from "./agenda.type.js";

interface IAtualizarAgendaRequest {
    id: string;
    data: IAgendaRequest;
}

class AtualizarAgendaUseCase {
    constructor(private adapter: AtualizarAgendaAdapter) {}

    async execute(request: IAtualizarAgendaRequest): Promise<IAgendaResponse> {
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

export default AtualizarAgendaUseCase;