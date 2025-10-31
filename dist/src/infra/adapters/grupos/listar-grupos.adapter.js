import Grupo from "../../schemas/grupos.js";
class ListarGrupoAdapter {
    async execute() {
        try {
            const response = await Grupo.find();
            const result = response.map((response) => ({
                id: response._id.toString(),
                titulo: String(response.titulo),
                participantes_id: response.participantes_id.map((p) => p.toString()),
                tabelas_ids: response.tabelas_ids.map((t) => t.toString())
            }));
            return result;
        }
        catch (error) {
            console.log("Erro ao listar o grupo:", error);
            throw new Error("Erro ao listar o grupo");
        }
    }
}
export default ListarGrupoAdapter;
