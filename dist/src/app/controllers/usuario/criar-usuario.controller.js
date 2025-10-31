import { validationResult } from "express-validator";
import CriarUsuarioUseCase from "../../../domain/usecase/usuario/criar-usuario.usecase.js";
import CriarUsuarioAdapter from "../../../infra/adapters/usuario/criar-usuario.adapter.js";
import { validUsuarioItem } from "./usuario.validation.js";
const criarUsuarioController = async (req, res) => {
    try {
        const adapter = new CriarUsuarioAdapter();
        const usecase = new CriarUsuarioUseCase(adapter);
        await Promise.all(validUsuarioItem.map(validation => validation.run(req)));
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { nome, telefone, email, password, tipo, } = req.body;
        const data = {
            nome,
            telefone,
            email,
            password,
            tipo,
        };
        const result = await usecase.execute(data);
        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default criarUsuarioController;
