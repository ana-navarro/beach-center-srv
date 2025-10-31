import AtualizarFinalAdapter from "../../../infra/adapters/final/atualizar-final.adapter.js";
import { IFinal } from "../../domain/final.js";
import { IFinalRequest } from "./final.types.js";

interface IAtualizarFinalUseCase {
    id: string;
    data: IFinalRequest;
}

class AtualizarFinalUseCase {
    constructor (private readonly adapter: AtualizarFinalAdapter) {}

    async execute({ id, data }: IAtualizarFinalUseCase): Promise<IFinal> {
        const response = await this.adapter.execute({ id, data });

        return {
            id: response.id,
            etapa: response.etapa,
            partida_id: response.partida_id,
            vencedores: response.vencedores,
        }
    }
}

export default AtualizarFinalUseCase;