import Grupo from "../../schemas/grupos.js";
import { IGrupoResponse } from "./grupo.type.js";

class ListarGrupoAdapter {
    async execute(): Promise<IGrupoResponse[]> {
        try {
            const response = await Grupo.find();

            const result: IGrupoResponse[] = response.map((response) => ({
                id: response._id.toString(),
                titulo: String(response.titulo),
                participantes_id: response.participantes_id.map((p) => p.toString()),
                tabelas_ids: response.tabelas_ids.map((t) => t.toString())
            }));

            return result;
        } catch (error) {
            console.log("Erro ao listar o grupo:", error);
            throw new Error("Erro ao listar o grupo");
        }
    }
}

export default ListarGrupoAdapter;