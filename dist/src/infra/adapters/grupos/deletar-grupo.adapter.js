import Grupo from "../../schemas/grupos.js";
class DeletarGrupoAdapter {
    async execute(id) {
        try {
            const response = await Grupo.findByIdAndDelete({ _id: id });
            if (!response) {
                throw new Error('Grupo não encontrado');
            }
            ;
        }
        catch (error) {
            console.log("Erro ao deletar o grupo:", error);
            throw new Error("Erro ao deletar o grupo");
        }
    }
}
export default DeletarGrupoAdapter;
