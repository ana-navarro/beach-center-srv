import VisualizarCampeonatoAdapter from "../../../infra/adapters/campeonato/visualizar-campeonato.adapter.js";
import { ICampeonatoResponse } from "./campeonato.type.js";


class VisualizarCampeonatoUseCase {
    constructor(private adapter: VisualizarCampeonatoAdapter) {}

    async execute(id: string): Promise<ICampeonatoResponse> {
        const response = await this.adapter.execute(id);
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

export default VisualizarCampeonatoUseCase;