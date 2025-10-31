import Grupo from "../../schemas/grupos.js";
class AtualizarGrupoAdapter {
    async execute({ id, data }) {
        const payload = {
            titulo: data.titulo,
            participantes_id: data.participantes_id,
            tabelas_ids: data.tabelas_ids,
        };
        try {
            const response = await Grupo.findByIdAndUpdate({ _id: id }, payload);
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
            console.log("Erro ao atualizar o grupo:", error);
            throw new Error("Erro ao atualizar o grupo");
        }
    }
}
export default AtualizarGrupoAdapter;
