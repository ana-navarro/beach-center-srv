import AtualizarTabelaAdapter from "../../../infra/adapters/tabela/atualizar-tabela.adapter.js";
import { ITabela } from "../../domain/tabela.js";
import { ITabelaRequest } from "./tabela.types.js";

interface IAtualizarTabelaUseCase {
    id: string;
    data: ITabelaRequest;
}

class AtualizarTabelaUseCase {
    constructor(private readonly adapter: AtualizarTabelaAdapter) { }

    async execute({ id, data }: IAtualizarTabelaUseCase): Promise<ITabela> {
        const response = await this.adapter.execute({ id, data });

        return {
            id: response.id,
            participante_id: response.participante_id,
            celula: response.celula,
        };
    }
}

export default AtualizarTabelaUseCase;