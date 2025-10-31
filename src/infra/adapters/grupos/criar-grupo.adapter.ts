import Grupo from "../../schemas/grupos.js";
import { IGrupoRequest, IGrupoResponse } from "./grupo.type.js";

class CriarGrupoAdapter {
    async execute(data: IGrupoRequest): Promise<IGrupoResponse> {
        const payload: IGrupoRequest = {
            titulo: data.titulo,
            participantes_id: data.participantes_id,
            tabelas_ids: data.tabelas_ids,
        };

        try {
            const response = await Grupo.create(payload);

            const result: IGrupoResponse = {
                id: response._id.toString(),
                titulo: String(response.titulo),
                participantes_id: response.participantes_id.map((p) => p.toString()),
                tabelas_ids: response.tabelas_ids.map((t) => t.toString())
            };

            return result;
        } catch (error) {
            console.log("Erro ao criar o grupo:", error);
            throw new Error("Erro ao criar o grupo");
        }
    }
}

export default CriarGrupoAdapter;