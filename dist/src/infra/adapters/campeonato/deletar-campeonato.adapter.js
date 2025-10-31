import Campeonato from "../../schemas/campeonato.js";
class DeletarCampeonatoAdapter {
    async execute(id) {
        try {
            await Campeonato.findOneAndDelete({ _id: id });
        }
        catch (error) {
            console.log("Erro ao deletar o campeonato:", error);
            throw new Error("Erro ao deletar o campeonato");
        }
    }
}
export default DeletarCampeonatoAdapter;
