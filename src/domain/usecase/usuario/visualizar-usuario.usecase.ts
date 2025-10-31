import VisualizarUsuarioAdapter from "../../../infra/adapters/usuario/visualizar-usuario.adapter.js";
import { IUsuarioResponse } from "./usuario.types.js";

class VisualizarUsuarioUseCase {
    constructor(private readonly adapter: VisualizarUsuarioAdapter) { }

    async execute(id: string): Promise<IUsuarioResponse> {
        const response = await this.adapter.execute(id);

        return {
            id: response.id,
            email: response.email,
            nome: response.nome,
            telefone: response.telefone,
            tipo: response.tipo,
        };
    }
}

export default VisualizarUsuarioUseCase;