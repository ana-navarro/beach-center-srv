import { validationResult } from "express-validator";
import CriarParticipanteUseCase from "../../../domain/usecase/participantes/criar-participante.usecase.js";
import CriarParticipanteAdapter from "../../../infra/adapters/participantes/criar-participante.adapter.js";
import { validParticipanteItem } from "./participante.validation.js";
const criarParticipanteController = async (req, res) => {
    try {
        const adapter = new CriarParticipanteAdapter();
        const usecase = new CriarParticipanteUseCase(adapter);
        await Promise.all(validParticipanteItem.map(validation => validation.run(req)));
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { evento_id, nome, telefone, email, } = req.body;
        const data = {
            evento_id,
            nome,
            telefone,
            email,
        };
        const result = await usecase.execute(data);
        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default criarParticipanteController;
