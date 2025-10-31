import Participante from "../../schemas/participantes.js";
import { IParticipanteRequest, IParticipanteResponse } from "./participante.type.js";

interface IAtualizarParticipanteAdapter {
    id: string;
    data: IParticipanteRequest;
}

class AtualizarParticipanteAdapter {
    async execute({ id, data }: IAtualizarParticipanteAdapter): Promise<IParticipanteResponse> {
        const payload: IParticipanteRequest = {
            evento_id: data.evento_id,
            nome: data.nome,
            telefone: data.telefone,
            email: data.email,
        };

        try {
            const response = await Participante.findByIdAndUpdate({ _id: id }, payload);

            if (!response) {
                throw new Error('Participante não encontrado');
            };
            
            const result: IParticipanteResponse = {
                id: response._id.toString(),
                evento_id: response.evento_id.map((e: any) => e.toString()),
                nome: String(response.nome),
                telefone: String(response.telefone),
                email: String(response.email),
            };

            return result;

        } catch (error) {
            console.log("Erro ao atualizar o participante:", error);
            throw new Error("Erro ao atualizar o participante");
        }
    }
}

export default AtualizarParticipanteAdapter;