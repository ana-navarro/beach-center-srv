import DeletarCampeonatoAdapter from "../../../infra/adapters/campeonato/deletar-campeonato.adapter.js";

class DeletarCampeonatoUsecase {
    constructor(private adapter: DeletarCampeonatoAdapter) {}

    async execute(id: string): Promise<void> {
        await this.adapter.execute(id);
    }
}

export default DeletarCampeonatoUsecase;