import CriarUsuarioAdapter from "../../../infra/adapters/usuario/criar-usuario.adapter.js";
import { IUsuarioRequest, IUsuarioResponse } from "./usuario.types.js";

class CriarUsuarioUseCase {
    constructor(private readonly adapter: CriarUsuarioAdapter) { }

    async execute(data: IUsuarioRequest): Promise<IUsuarioResponse> {
        const response = await this.adapter.execute(data);

        return {
            id: response.id,
            email: response.email,
            nome: response.nome,
            telefone: response.telefone,
            tipo: response.tipo,
        };
    }
}

export default CriarUsuarioUseCase;