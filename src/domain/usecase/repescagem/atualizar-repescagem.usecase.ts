import AtualizarRepescagemAdapter from "../../../infra/adapters/repescagem/atualizar-repescagem.adapter.js";
import { IRepescagem } from "../../domain/repescagem.js";
import { IRepescagemRequest } from "./repescagem.types.js";

interface IAtualizarRepescagemUseCase {
    id: string;
    data: IRepescagemRequest;
}

class AtualizarRepescagemUseCase {
    constructor (private readonly adapter: AtualizarRepescagemAdapter) {}

    async execute({ id, data }: IAtualizarRepescagemUseCase): Promise<IRepescagem> {
            const response = await this.adapter.execute({ id, data });
    
            return {
                id: response.id,
                etapa: response.etapa,
                partida_id: response.partida_id,
                vencedores: response.vencedores,
            }
        }
}

export default AtualizarRepescagemUseCase;