import DeletarUsuarioAdapter from "../../../infra/adapters/usuario/deletar-usuario.adapter.js";

class DeletarUsuarioUseCase {
    constructor (private readonly adapter: DeletarUsuarioAdapter) {}

    async execute(id: string): Promise<void> {
        await this.adapter.execute(id);
    }
}

export default DeletarUsuarioUseCase;