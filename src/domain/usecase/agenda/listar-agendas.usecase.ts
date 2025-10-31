import ListarAgendasAdapter from "../../../infra/adapters/agenda/listar-agendas.adapter.js";
import { IAgendaResponse } from "./agenda.type.js";

class ListarAgendaUseCase {
    constructor(private adapter: ListarAgendasAdapter) {}

    async execute(): Promise<IAgendaResponse[]> {
        const response = await this.adapter.execute();

        return response.map((agenda) => ({
            id: agenda.id,
            dia: agenda.dia,
            horarioInicio: agenda.horarioInicio,
            horaFim: agenda.horaFim,
            local: agenda.local,
            quadra: agenda.quadra,
            disponivel: agenda.disponivel,
        }));
    }
}

export default ListarAgendaUseCase;