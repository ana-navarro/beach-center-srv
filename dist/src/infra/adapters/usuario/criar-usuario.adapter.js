import bcrypt from 'bcrypt';
import Usuario from '../../schemas/usuario.js';
class CriarUsuarioAdapter {
    async execute(data) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(data.password, salt);
            const checkEmailAlreadyRegisted = await Usuario.findOne({ email: data.email });
            if (checkEmailAlreadyRegisted) {
                throw new Error('Email já em uso!');
            }
            ;
            const payload = {
                nome: data.nome,
                telefone: data.telefone,
                email: data.email,
                password: hash,
                tipo: data.tipo,
            };
            const response = await Usuario.create(payload);
            const result = {
                id: response._id.toString(),
                nome: response.nome,
                telefone: response.telefone,
                email: response.email,
                tipo: response.tipo,
            };
            return result;
        }
        catch (error) {
            console.log("Erro ao criar usuario:", error);
            throw new Error("Erro ao criar usuario");
        }
    }
}
export default CriarUsuarioAdapter;
