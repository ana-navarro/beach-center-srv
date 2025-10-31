import Usuario from "../../schemas/usuario.js";

class DeletarUsuarioAdapter {
    async execute(email: string): Promise<void> {
        try {
            const response = await Usuario.findOne({ email });

            if (!response) {
                throw new Error('Usuário não encontrado!');
            }

            await Usuario.deleteOne(response._id)
        } catch (error) {
            console.log("Erro ao listar usuario:", error);
            throw new Error("Erro ao listar usuario");
        }
    }
}

export default DeletarUsuarioAdapter;