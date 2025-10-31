import ListarEventosAdapter from "../../../infra/adapters/evento/listar-eventos.adapter.js";
import { IEventoResponse } from "./evento.types.js";

class ListarEventoUseCase {
    constructor(private readonly adapter: ListarEventosAdapter) {}

    async execute(): Promise<IEventoResponse[]> {
        const response = await this.adapter.execute();

        return response.map((data) => ({
            id: data.id,
            titulo: data.titulo,
            vagas: data.vagas,
            evento_tipo: data.evento_tipo,
            campeonato_id: data.campeonato_id,
            repescagem_id: data.repescagem_id || [],
            status: data.status,
            grupo_id: data.grupo_id || [],
            final_id: data.final_id || [],
            vencedor_id: data.vencedor_id || '',
        }));
    }
}

export default ListarEventoUseCase;