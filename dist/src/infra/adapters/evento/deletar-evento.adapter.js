import Evento from "../../schemas/evento.js";
class DeletarEventoAdapter {
    async execute(id) {
        try {
            await Evento.findOneAndDelete({ _id: id });
        }
        catch (error) {
            console.log("Erro ao deletar o evento:", error);
            throw new Error("Erro ao deletar o evento");
        }
    }
}
export default DeletarEventoAdapter;
