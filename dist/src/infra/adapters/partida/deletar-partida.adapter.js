import Partida from "../../schemas/partida.js";
class DeletarPartidaAdapter {
    async execute(id) {
        try {
            const response = await Partida.findByIdAndDelete({ _id: id });
            if (!response) {
                throw new Error("Partida não encontrada!");
            }
            ;
        }
        catch (error) {
            console.log("Erro ao deletar a partida:", error);
            throw new Error("Erro ao deletar a partida");
        }
    }
}
export default DeletarPartidaAdapter;
