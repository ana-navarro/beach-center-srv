import DeletarRepescagemAdapter from "../../../infra/adapters/repescagem/deletar-repescagem.adapter.js";

class DeletarRepescagemUseCase {
    constructor(private readonly adapter: DeletarRepescagemAdapter) { }

    async execute(id: string): Promise<void> {
        await this.adapter.execute(id);
    }
}

export default DeletarRepescagemUseCase;