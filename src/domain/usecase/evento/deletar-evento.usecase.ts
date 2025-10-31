import DeletarEventoAdapter from "../../../infra/adapters/evento/deletar-evento.adapter.js";

class DeletarEventoUseCase {
    constructor(private readonly adapter: DeletarEventoAdapter) {}

    async execute(id: string) {
        await this.adapter.execute(id);
    }
}

export default DeletarEventoUseCase;