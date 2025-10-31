import AtualizarCampeonatoAdapter from "../../../infra/adapters/campeonato/atualizar-campeonato.adapter.js";
import { ICampeonatoRequest } from "../../../infra/adapters/campeonato/campeonato.type.js";
import { ICampeonatoResponse } from "./campeonato.type.js";

interface IAtualizarCampeonatoUseCase {
    id: string;
    data: ICampeonatoRequest;
}

class AtualizarCampeonatoUseCase {
    constructor(private adapter: AtualizarCampeonatoAdapter) {}

    async execute(request: IAtualizarCampeonatoUseCase): Promise<ICampeonatoResponse> {
        const response = await this.adapter.execute(request);
        return {
            id: response.id,
            titulo: response.titulo,
            esporte: response.esporte,
            descricao: response.descricao || '',
            dataInicio: response.dataInicio,
            dataFim: response.dataFim,
            status: response.status,
        };
    }
}

export default AtualizarCampeonatoUseCase;