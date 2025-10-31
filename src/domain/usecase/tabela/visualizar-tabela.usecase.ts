import VisualizarTabelaAdapter from "../../../infra/adapters/tabela/visualizar-tabela.adapter.js";
import { ITabela } from "../../domain/tabela.js";

class VisualizarTabelaUseCase {
    constructor(private readonly adapter: VisualizarTabelaAdapter) { }

    async execute(id: string): Promise<ITabela> {
        const response = await this.adapter.execute(id);

        return {
            id: response.id,
            participante_id: response.participante_id,
            celula: response.celula,
        };
    }
}

export default VisualizarTabelaUseCase;