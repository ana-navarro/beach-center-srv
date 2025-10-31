import Participante from "../../schemas/participantes.js";
class VisualizarParticipanteAdapter {
    async execute(id) {
        try {
            const response = await Participante.findById({ _id: id });
            if (!response) {
                throw new Error('Participante não encontrado');
            }
            ;
            const result = {
                id: response._id.toString(),
                evento_id: response.evento_id.map((e) => e.toString()),
                nome: String(response.nome),
                telefone: String(response.telefone),
                email: String(response.email),
            };
            return result;
        }
        catch (error) {
            console.log("Erro ao visualizar o participante:", error);
            throw new Error("Erro ao visualizar o participante");
        }
    }
}
export default VisualizarParticipanteAdapter;
