import DeletarFinalAdapter from "../../../infra/adapters/final/deletar-final.adapter.js";

class DeletarFinalUseCase {
    constructor (private readonly adapter: DeletarFinalAdapter) {}

    async execute(id: string): Promise<void> {
        await this.adapter.execute(id);
    }
}

export default DeletarFinalUseCase;