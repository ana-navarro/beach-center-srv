import CriarEventoAdapter from "../../../infra/adapters/evento/criar-evento.adapter.js";
import { IEventoRequest, IEventoResponse } from "./evento.types.js";

class CriarEventoUseCase {
    constructor(private readonly adapter: CriarEventoAdapter) { }

    async execute(data: IEventoRequest): Promise<IEventoResponse> {
        const response = await this.adapter.execute(data);

        return {
            id: response.id,
            titulo: response.titulo,
            vagas: response.vagas,
            evento_tipo: response.evento_tipo,
            campeonato_id: response.campeonato_id,
            repescagem_id: response.repescagem_id || [],
            status: response.status,
            grupo_id: response.grupo_id || [],
            final_id: response.final_id || [],
            vencedor_id: response.vencedor_id || '',
        }
    }
}

export default CriarEventoUseCase;