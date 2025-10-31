import Participante from "../../schemas/participantes.js";
class ListarParticipanteAdapter {
    async execute() {
        try {
            const response = await Participante.find();
            const result = response.map((response) => ({
                id: response._id.toString(),
                evento_id: response.evento_id.map((e) => e.toString()),
                nome: String(response.nome),
                telefone: String(response.telefone),
                email: String(response.email),
            }));
            return result;
        }
        catch (error) {
            console.log("Erro ao criar o participante:", error);
            throw new Error("Erro ao atualizar o participante");
        }
    }
}
export default ListarParticipanteAdapter;
