import Usuario from "../../schemas/usuario.js";

export interface IUsuarioResponse {
    id: string;
    nome: string;
    telefone: string;
    email: string;
    tipo: 'administrador' | 'cliente' | 'professor';
}

class ListarUsuarioAdapter {
    async execute(): Promise<IUsuarioResponse[]> {
        try {
            const response = await Usuario.find();

            const result: IUsuarioResponse[] = response.map((response) => ({
                id: response._id.toString(),
                nome: response.nome,
                telefone: response.telefone,
                email: response.email,
                tipo: response.tipo,
            }));

            return result;
        } catch (error) {
            console.log("Erro ao listar usuario:", error);
            throw new Error("Erro ao listar usuario");
        }
    }
}

export default ListarUsuarioAdapter;