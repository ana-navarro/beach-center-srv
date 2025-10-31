import ListarGrupoAdapter from "../../../infra/adapters/grupos/listar-grupos.adapter.js";
import { IGrupo } from "../../domain/grupos.js";

class ListarGrupoUseCase {
    constructor(private readonly adapter: ListarGrupoAdapter) { }

    async execute(): Promise<IGrupo[]> {
        const response = await this.adapter.execute();

        return response.map((response) => ({
            id: response.id,
            participantes_id: response.participantes_id,
            tabelas_ids: response.tabelas_ids,
            titulo: response.titulo,
        }));
    }
}

export default ListarGrupoUseCase;