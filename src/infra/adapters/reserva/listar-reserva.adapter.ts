import Reserva from "../../schemas/reserva.js";
import { IReservaResponse } from "./reserva.type.js";

class ListarReservaAdapter {
    async execute(): Promise<IReservaResponse[]> {
        try {
            const response = await Reserva.find();

            const result: IReservaResponse[] = response.map((response) => ({
                id: response._id.toString(),
                agenda_id: String(response.agenda_id),
                nome: String(response.nome),
                telefone: String(response.telefone),
                email: String(response.email),
                pago: response.pago,
                precisa_materias: response.precisa_materias,
                materiais: response.materiais ? response.materiais : [],
            }));

            return result;
        } catch (error) {
            console.log("Erro ao listar a reserva:", error);
            throw new Error("Erro ao listar a reserva");
        }
    }
}

export default ListarReservaAdapter;