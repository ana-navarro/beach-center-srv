import DeletarPartidaAdapter from "../../../infra/adapters/partida/deletar-partida.adapter.js";

class DeletarPartidaUseCase {
    constructor(private readonly adapter: DeletarPartidaAdapter) { }

    async execute(id: string): Promise<void> {
        await this.adapter.execute(id);
    }
}

export default DeletarPartidaUseCase;