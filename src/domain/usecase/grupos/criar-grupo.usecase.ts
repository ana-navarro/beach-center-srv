import CriarGrupoAdapter from "../../../infra/adapters/grupos/criar-grupo.adapter.js";
import { IGrupo } from "../../domain/grupos.js";
import { IGrupoRequest } from "./grupo.types.js";

class CriarGrupoUseCase {
    constructor(private readonly adapter: CriarGrupoAdapter) { }

    async execute(data: IGrupoRequest): Promise<IGrupo> {
        const response = await this.adapter.execute(data);

        return {
            id: response.id,
            participantes_id: response.participantes_id,
            tabelas_ids: response.tabelas_ids,
            titulo: response.titulo,
        }
    }
}

export default CriarGrupoUseCase;