import ListarUsuarioAdapter from "../../../infra/adapters/usuario/listar-usuarios.adapter.js";
import { IUsuarioResponse } from "./usuario.types.js";

class ListarUsuarioUseCase {
    constructor(private readonly adapter: ListarUsuarioAdapter) { }

    async execute(): Promise<IUsuarioResponse[]> {
        const response = await this.adapter.execute();

        return response.map((response) => ({
            id: response.id,
            email: response.email,
            nome: response.nome,
            telefone: response.telefone,
            tipo: response.tipo,
        }));
    }
}

export default ListarUsuarioUseCase;