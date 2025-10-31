import Usuario from "../../schemas/usuario.js";
class ListarUsuarioAdapter {
    async execute() {
        try {
            const response = await Usuario.find();
            const result = response.map((response) => ({
                id: response._id.toString(),
                nome: response.nome,
                telefone: response.telefone,
                email: response.email,
                tipo: response.tipo,
            }));
            return result;
        }
        catch (error) {
            console.log("Erro ao listar usuario:", error);
            throw new Error("Erro ao listar usuario");
        }
    }
}
export default ListarUsuarioAdapter;
