import VisualizarRepescagemAdapter from "../../../infra/adapters/repescagem/visualizar-repescagem.adapter.js";
import { IRepescagem } from "../../domain/repescagem.js";

class VisualizarRepescagemUseCase {
    constructor(private readonly adapter: VisualizarRepescagemAdapter) { }

    async execute(id: string): Promise<IRepescagem> {
        const response = await this.adapter.execute(id);

        return {
            id: response.id,
            etapa: response.etapa,
            partida_id: response.partida_id,
            vencedores: response.vencedores,
        }
    }
}

export default VisualizarRepescagemUseCase;