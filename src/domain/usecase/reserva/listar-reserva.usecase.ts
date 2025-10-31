import ListarReservaAdapter from "../../../infra/adapters/reserva/listar-reserva.adapter.js";
import { IReserva } from "../../domain/reserva.js";

class ListarReservaUseCase {
    constructor(private readonly adapter: ListarReservaAdapter) { }
    async execute(): Promise<IReserva[]> {
        const response = await this.adapter.execute();

        return response.map((response) => ({
            id: response.id,
            agenda_id: response.agenda_id,
            email: response.email,
            nome: response.nome,
            pago: response.pago,
            precisa_materias: response.precisa_materias,
            telefone: response.telefone,
            materiais: response.materiais || []
        }));
    }
}

export default ListarReservaUseCase;