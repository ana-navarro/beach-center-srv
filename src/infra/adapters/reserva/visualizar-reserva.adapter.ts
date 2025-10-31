import Reserva from "../../schemas/reserva.js";
import { IReservaResponse } from "./reserva.type.js";

class VisualizarReservaAdapter {
    async execute(id: string): Promise<IReservaResponse> {
        try {
            const response = await Reserva.findById({_id: id});

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
            console.log("Erro ao visualizar a reserva:", error);
            throw new Error("Erro ao visualizar a reserva");
        }
    }
}

export default VisualizarReservaAdapter;