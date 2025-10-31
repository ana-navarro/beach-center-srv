import bcrypt from 'bcrypt'
import { IUsuarioResponse } from './listar-usuarios.adapter.js';
import { IUsuarioRequest } from './usuario.type.js';
import Usuario from '../../schemas/usuario.js';

class CriarUsuarioAdapter {
    async execute(data: IUsuarioRequest): Promise<IUsuarioResponse> {
        try {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(data.password, salt);
            const checkEmailAlreadyRegisted = await Usuario.findOne({ email: data.email });

            if (checkEmailAlreadyRegisted) {
                throw new Error('Email já em uso!');
            };

            const payload: IUsuarioRequest = {
                nome: data.nome,
                telefone: data.telefone,
                email: data.email,
                password: hash,
                tipo: data.tipo,
            };

            const response = await Usuario.create(payload);

            const result: IUsuarioResponse = {
                id: response._id.toString(),
                nome: response.nome,
                telefone: response.telefone,
                email: response.email,
                tipo: response.tipo,
            };

            return result;
        } catch (error) {
            console.log("Erro ao criar usuario:", error);
            throw new Error("Erro ao criar usuario");
        }
    }
}

export default CriarUsuarioAdapter;