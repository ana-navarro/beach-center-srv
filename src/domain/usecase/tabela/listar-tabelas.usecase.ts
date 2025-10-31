import ListarTabelaAdapter from "../../../infra/adapters/tabela/listar-tabelas.adapter.js";
import { ITabela } from "../../domain/tabela.js";

class ListarTabelaUseCase {
    constructor(private readonly adapter: ListarTabelaAdapter) { }

    async execute(): Promise<ITabela[]> {
        const response = await this.adapter.execute();

        return response.map((response) => ({
            id: response.id,
            participante_id: response.participante_id,
            celula: response.celula,
        }));
    }
}

export default ListarTabelaUseCase;