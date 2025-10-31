import { validationResult } from "express-validator";
import AtualizarParticipanteAdapter from "../../../infra/adapters/participantes/atualizar-participante.adapter.js";
import AtualizarParticipanteUseCase from "../../../domain/usecase/participantes/atualizar-participante.usecase.js";
import { validParticipanteItem } from "./participante.validation.js";
const atualizarParticipanteController = async (req, res) => {
    try {
        const adapter = new AtualizarParticipanteAdapter();
        const usecase = new AtualizarParticipanteUseCase(adapter);
        await Promise.all(validParticipanteItem.map(validation => validation.run(req)));
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'O ID do participante é obrigatório' });
        }
        const { evento_id, nome, telefone, email, } = req.body;
        const data = {
            evento_id,
            nome,
            telefone,
            email,
        };
        const result = await usecase.execute({ id, data });
        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default atualizarParticipanteController;
