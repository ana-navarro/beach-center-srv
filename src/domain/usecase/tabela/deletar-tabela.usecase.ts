import DeletarTabelaAdapter from "../../../infra/adapters/tabela/deletar-tabela.adapter.js";

class DeletarTabelaUseCase {
    constructor (private readonly adapter: DeletarTabelaAdapter) {}

    async execute(id: string): Promise<void> {
        await this.adapter.execute(id);
    }
}

export default DeletarTabelaUseCase;