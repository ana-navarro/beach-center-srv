import Participante from "../../schemas/participantes.js";
class DeletarParticipanteAdapter {
    async execute(id) {
        try {
            const response = await Participante.findByIdAndDelete({ _id: id });
            if (!response) {
                throw new Error('Participante não encontrado');
            }
            ;
        }
        catch (error) {
            console.log("Erro ao deletar o participante:", error);
            throw new Error("Erro ao deletar o participante");
        }
    }
}
export default DeletarParticipanteAdapter;
