import { validationResult } from "express-validator";
import AtualizarUsuarioUseCase from "../../../domain/usecase/usuario/atualizar-usuario.usecase.js";
import AtualizarUsuarioAdapter from "../../../infra/adapters/usuario/atualizar-usuario.adapter.js";
import { validUsuarioItem } from "./usuario.validation.js";
const atualizarUsuarioController = async (req, res) => {
    try {
        const adapter = new AtualizarUsuarioAdapter();
        const usecase = new AtualizarUsuarioUseCase(adapter);
        await Promise.all(validUsuarioItem.map(validation => validation.run(req)));
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'O ID da reserva é obrigatório' });
        }
        const { nome, telefone, email, password, tipo, } = req.body;
        const data = {
            nome,
            telefone,
            email,
            password,
            tipo,
        };
        const result = await usecase.execute({ id, data });
        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default atualizarUsuarioController;
