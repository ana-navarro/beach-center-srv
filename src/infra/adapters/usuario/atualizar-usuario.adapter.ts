import bcrypt from 'bcrypt'
import Usuario from '../../schemas/usuario.js';
import { IUsuarioRequest, IUsuarioResponse } from './usuario.type.js';

interface IAtualizarUsuarioAdapter {
    id: string;
    data: IUsuarioRequest;
}

class AtualizarUsuarioAdapter {
    async execute({ id, data }: IAtualizarUsuarioAdapter): Promise<IUsuarioResponse> {
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

            const response = await Usuario.findByIdAndUpdate({ _id: id }, payload);

            if (!response) {
                throw new Error('Usuário não encontrado!');
            };

            const result: IUsuarioResponse = {
                id: response._id.toString(),
                nome: response.nome,
                telefone: response.telefone,
                email: response.email,
                password: hash,
                tipo: response.tipo,
            };

            return result;
        } catch (error) {
            console.log("Erro ao atualizar usuario:", error);
            throw new Error("Erro ao atualizar usuario");
        }
    }
}

export default AtualizarUsuarioAdapter;