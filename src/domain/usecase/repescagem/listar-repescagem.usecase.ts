import ListarRepescagemAdapter from "../../../infra/adapters/repescagem/listar-repescagem.adapter.js";
import { IRepescagem } from "../../domain/repescagem.js";

class ListarRepescagemUseCase {
    constructor(private readonly adapter: ListarRepescagemAdapter) { }

    async execute(): Promise<IRepescagem[]> {
        const response = await this.adapter.execute();

        return response.map((r) => ({
            id: r.id,
            etapa: r.etapa,
            partida_id: r.partida_id,
            vencedores: r.vencedores,
        }))
    }
}

export default ListarRepescagemUseCase;