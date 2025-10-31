import CriarReservaAdapter from "../../../infra/adapters/reserva/criar-reserva.adapter.js";
import { IReserva } from "../../domain/reserva.js";
import { IReservaRequest } from "./reserva.types.js";

class CriarReservaUseCase {
    constructor(private readonly adapter: CriarReservaAdapter) { }

    async execute(data: IReservaRequest): Promise<IReserva> {
        const response = await this.adapter.execute(data);

        return {
            id: response.id,
            agenda_id: response.agenda_id,
            email: response.email,
            nome: response.nome,
            pago: response.pago,
            precisa_materias: response.precisa_materias,
            telefone: response.telefone,
            materiais: response.materiais || []
        };
    }
}

export default CriarReservaUseCase;