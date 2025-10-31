import AtualizarUsuarioAdapter from "../../../infra/adapters/usuario/atualizar-usuario.adapter.js";
import { IUsuarioRequest, IUsuarioResponse } from "./usuario.types.js";

interface IAtualizarTabelaUseCase {
    id: string;
    data: IUsuarioRequest;
}

class AtualizarUsuarioUseCase {
    constructor(private readonly adapter: AtualizarUsuarioAdapter) { }

    async execute({ id, data }: IAtualizarTabelaUseCase): Promise<IUsuarioResponse> {
        const response = await this.adapter.execute({ id, data });

        return {
            id: response.id,
            email: response.email,
            nome: response.nome,
            telefone: response.telefone,
            tipo: response.tipo,
        };
    }
}

export default AtualizarUsuarioUseCase;