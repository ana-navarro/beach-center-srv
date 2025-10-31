import DeletarParticipanteAdapter from "../../../infra/adapters/participantes/deletar-participante.adapter.js";

class DeletarParticipanteUseCase {
    constructor(private readonly adapter: DeletarParticipanteAdapter) { }

    async execute(id: string): Promise<void> {
        await this.adapter.execute(id);
    }
}

export default DeletarParticipanteUseCase;