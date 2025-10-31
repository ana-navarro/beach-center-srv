import DeletarReservaAdapter from "../../../infra/adapters/reserva/deletar-reserva.adapter.js";

class DeletarReservaUseCase {
    constructor (private readonly adapter: DeletarReservaAdapter) {}

    async execute(id: string): Promise<void> {
        await this.adapter.execute(id);
    }
}

export default DeletarReservaUseCase;