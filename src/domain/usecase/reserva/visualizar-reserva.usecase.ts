import VisualizarReservaAdapter from "../../../infra/adapters/reserva/visualizar-reserva.adapter.js";
import { IReserva } from "../../domain/reserva.js";

class VisualizarReservaUseCase {
    constructor(private readonly adapter: VisualizarReservaAdapter) { }

    async execute(id: string): Promise<IReserva> {
        const response = await this.adapter.execute(id);

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

export default VisualizarReservaUseCase;