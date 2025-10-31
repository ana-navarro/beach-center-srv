import AtualizarReservaAdapter from "../../../infra/adapters/reserva/atualizar-reserva.adapter.js";
import { IReserva } from "../../domain/reserva.js";
import { IReservaRequest } from "./reserva.types.js";

interface IAtualizarReservaUseCase {
    id: string;
    data: IReservaRequest
}

class AtualizarReservaUseCase {
    constructor(private readonly adapter: AtualizarReservaAdapter) { }

    async execute({ id, data }: IAtualizarReservaUseCase): Promise<IReserva> {
        const response = await this.adapter.execute({ id, data });

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

export default AtualizarReservaUseCase;