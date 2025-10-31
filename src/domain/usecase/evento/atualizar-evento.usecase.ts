import AtualizarEventoAdapter from "../../../infra/adapters/evento/atualizar-evento.adapter.js";
import { IEventoRequest, IEventoResponse } from "./evento.types.js";

interface IAtualizarEventoRequest {
    id: string;
    data: IEventoRequest;
}

class AtualizarEventoUsecase {
    constructor(private readonly adapter: AtualizarEventoAdapter) {}

    async execute({ id, data }: IAtualizarEventoRequest): Promise<IEventoResponse> {
        const response = await this.adapter.execute({ id, data });

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

export default AtualizarEventoUsecase;