import Agenda from "../../schemas/agenda.js";
class DeletarAgendaAdapter {
    async execute(id) {
        try {
            await Agenda.findOneAndDelete({ _id: id });
        }
        catch (error) {
            console.log("Erro ao deletar a agenda:", error);
            throw new Error("Erro ao deletar a agenda");
        }
    }
}
export default DeletarAgendaAdapter;
