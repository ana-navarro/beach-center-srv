import DeletarGrupoAdapter from "../../../infra/adapters/grupos/deletar-grupo.adapter.js";

class DeletarGrupoUseCase {
    constructor(private readonly adapter: DeletarGrupoAdapter) { }

    async execute(id: string): Promise<void> {
        await this.adapter.execute(id);
    }
}

export default DeletarGrupoUseCase;