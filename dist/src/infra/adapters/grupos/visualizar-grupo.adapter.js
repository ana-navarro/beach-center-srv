import Grupo from "../../schemas/grupos.js";
class VisualizarGrupoAdapter {
    async execute(id) {
        try {
            const response = await Grupo.findById({ _id: id });
            if (!response) {
                throw new Error('Grupo não encontrado');
            }
            ;
            const result = {
                id: response._id.toString(),
                titulo: String(response.titulo),
                participantes_id: response.participantes_id.map((p) => p.toString()),
                tabelas_ids: response.tabelas_ids.map((t) => t.toString())
            };
            return result;
        }
        catch (error) {
            console.log("Erro ao visualizar o grupo:", error);
            throw new Error("Erro ao visualizar o grupo");
        }
    }
}
export default VisualizarGrupoAdapter;
