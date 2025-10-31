import CriarTabelaAdapter from "../../../infra/adapters/tabela/criar-tabela.adapter.js";
import { ITabela } from "../../domain/tabela.js";
import { ITabelaRequest } from "./tabela.types.js";

class CriarTabelaUseCase {
    constructor(private readonly adapter: CriarTabelaAdapter) { }

    async execute(data: ITabelaRequest): Promise<ITabela> {
        const response = await this.adapter.execute(data);

        return {
            id: response.id,
            participante_id: response.participante_id,
            celula: response.celula,
        };
    }
}

export default CriarTabelaUseCase;