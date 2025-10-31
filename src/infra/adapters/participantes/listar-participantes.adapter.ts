import Participante from "../../schemas/participantes.js";
import { IParticipanteResponse } from "./participante.type.js";

class ListarParticipanteAdapter {
    async execute(): Promise<IParticipanteResponse[]> {
        try {
            const response = await Participante.find();
            
            const result: IParticipanteResponse[] = response.map((response) => ({
                id: response._id.toString(),
                evento_id: response.evento_id.map((e: any) => e.toString()),
                nome: String(response.nome),
                telefone: String(response.telefone),
                email: String(response.email),
            }));

            return result;
        } catch (error) {
            console.log("Erro ao criar o participante:", error);
            throw new Error("Erro ao atualizar o participante");
        }
    }
}

export default ListarParticipanteAdapter;