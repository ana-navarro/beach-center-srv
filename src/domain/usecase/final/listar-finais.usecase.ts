import ListarFinalAdapter from "../../../infra/adapters/final/listar-finais.adapter.js";
import { IFinal } from "../../domain/final.js";

class ListarFinalUseCase {
    constructor (private readonly adapter: ListarFinalAdapter) {}

    async execute(): Promise<IFinal[]> {
        const response = await this.adapter.execute();

        return response.map((r) => ({
            id: r.id,
            etapa: r.etapa,
            partida_id: r.partida_id,
            vencedores: r.vencedores,
        }))
    }
}

export default ListarFinalUseCase;