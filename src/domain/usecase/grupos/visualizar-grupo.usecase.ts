import VisualizarGrupoAdapter from "../../../infra/adapters/grupos/visualizar-grupo.adapter.js";
import { IGrupo } from "../../domain/grupos.js";

class VisualizarGrupoUseCase {
    constructor(private readonly adapter: VisualizarGrupoAdapter) { }

    async execute(id: string): Promise<IGrupo> {
        const response = await this.adapter.execute(id);

        return {
            id: response.id,
            participantes_id: response.participantes_id,
            tabelas_ids: response.tabelas_ids,
            titulo: response.titulo,
        }
    }
}

export default VisualizarGrupoUseCase;