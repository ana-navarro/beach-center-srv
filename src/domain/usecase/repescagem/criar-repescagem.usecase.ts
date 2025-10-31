import CriarRepescagemAdapter from "../../../infra/adapters/repescagem/criar-repescagem.adapter.js";
import { IRepescagem } from "../../domain/repescagem.js";
import { IRepescagemRequest } from "./repescagem.types.js";

class CriarRepescagemUseCase {
    constructor(private readonly adapter: CriarRepescagemAdapter) { }

    async execute(data: IRepescagemRequest): Promise<IRepescagem> {
        const response = await this.adapter.execute(data);

        return {
            id: response.id,
            etapa: response.etapa,
            partida_id: response.partida_id,
            vencedores: response.vencedores,
        };
    }
}

export default CriarRepescagemUseCase;