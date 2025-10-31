import VisualizarFinalAdapter from "../../../infra/adapters/final/visualizar-final.adapter.js";
import { IFinal } from "../../domain/final.js";

class VisualizarFinalUseCase {
    constructor (private readonly adapter: VisualizarFinalAdapter) {}

    async execute(id: string): Promise<IFinal> {
        const response = await this.adapter.execute(id);

        return {
            id: response.id,
            etapa: response.etapa,
            partida_id: response.partida_id,
            vencedores: response.vencedores,
        }
    }
}

export default VisualizarFinalUseCase;