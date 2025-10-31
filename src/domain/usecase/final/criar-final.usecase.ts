import CriarFinalAdapter from "../../../infra/adapters/final/criar-final.adapter.js";
import { IFinal } from "../../domain/final.js";
import { IFinalRequest } from "./final.types.js";

class CriarFinalUseCase {
    constructor (private readonly adapter: CriarFinalAdapter) {}

    async execute(data: IFinalRequest): Promise<IFinal> {
        const response = await this.adapter.execute(data);

        return {
            id: response.id,
            etapa: response.etapa,
            partida_id: response.partida_id,
            vencedores: response.vencedores,
        };
    }
}

export default CriarFinalUseCase;