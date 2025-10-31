import AtualizarGrupoAdapter from "../../../infra/adapters/grupos/atualizar-grupo.adapter.js";
import { IGrupo } from "../../domain/grupos.js";
import { IGrupoRequest } from "./grupo.types.js";

interface IAtualizarGrupoUseCase {
    id: string;
    data: IGrupoRequest;
}

class AtualizarGrupoUseCase {
    constructor (private readonly adapter: AtualizarGrupoAdapter) {}

    async execute({ id, data }: IAtualizarGrupoUseCase): Promise<IGrupo> {
        const response = await this.adapter.execute({ id, data });

        return {
            id: response.id,
            participantes_id: response.participantes_id,
            tabelas_ids: response.tabelas_ids,
            titulo: response.titulo,
        }
    }
}

export default AtualizarGrupoUseCase;