import Reserva from "../../schemas/reserva.js";
import { IReservaRequest, IReservaResponse } from "./reserva.type.js";

interface IAtualizarReservaAdapter {
    id: string,
    data: IReservaRequest,
}

class AtualizarReservaAdapter {
    async execute({ id, data }: IAtualizarReservaAdapter): Promise<IReservaResponse> {
        const payload: IReservaRequest = {
            agenda_id: data.agenda_id,
            nome: data.nome,
            telefone: data.telefone,
            email: data.email,
            pago: data.pago,
            precisa_materias: data.precisa_materias,
            materiais: data.materiais ? data.materiais : [],
        };

        try {
            const response = await Reserva.findByIdAndUpdate({_id: id}, payload);

            if (!response) {
                throw new Error('Partida não encontrada!');
            };

            const result: IReservaResponse = {
                id: response._id.toString(),
                agenda_id: String(response.agenda_id),
                nome: String(response.nome),
                telefone: String(response.telefone),
                email: String(response.email),
                pago: response.pago,
                precisa_materias: response.precisa_materias,
                materiais: response.materiais ? response.materiais : [],
            }

            return result;
        } catch (error) {
            console.log("Erro ao atualizar a reserva:", error);
            throw new Error("Erro ao atualizar a reserva");
        }
    }
}

export default AtualizarReservaAdapter;