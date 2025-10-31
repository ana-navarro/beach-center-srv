import { ICampeonatoRequest } from "../../../infra/adapters/campeonato/campeonato.type.js";
import CriarCampeonatoAdapter from "../../../infra/adapters/campeonato/criar-campeonato.adapter.js";
import { ICampeonatoResponse } from "./campeonato.type.js";

interface ICriarCampeonatoUseCase {
    data: ICampeonatoRequest;
}

class CriarCampeonatoUseCase {
    constructor(private adapter: CriarCampeonatoAdapter) {}

    async execute(request: ICriarCampeonatoUseCase): Promise<ICampeonatoResponse> {
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

export default CriarCampeonatoUseCase;