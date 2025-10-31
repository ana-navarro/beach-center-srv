import DeletarAgendaAdapter from "../../../infra/adapters/agenda/deletar-agenda.adapter.js";

class DeletarAgendaUseCase {
    constructor(private adapter: DeletarAgendaAdapter) {}

    async execute(id: string): Promise<void> {
        await this.adapter.execute(id);
    }
}

export default DeletarAgendaUseCase;