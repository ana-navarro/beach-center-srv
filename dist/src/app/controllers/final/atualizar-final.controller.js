import { validationResult } from "express-validator";
import AtualizarFinalUseCase from "../../../domain/usecase/final/atualizar-final.usecase.js";
import AtualizarFinalAdapter from "../../../infra/adapters/final/atualizar-final.adapter.js";
import { validFinalItem } from "./final.validation.js";
const atualizarFinalController = async (req, res) => {
    try {
        const adapter = new AtualizarFinalAdapter();
        const usecase = new AtualizarFinalUseCase(adapter);
        await Promise.all(validFinalItem.map(validation => validation.run(req)));
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'O ID da final é obrigatório' });
        }
        const { etapa, partida_id, vencedores } = req.body;
        const data = {
            etapa,
            partida_id,
            vencedores,
        };
        const result = await usecase.execute({ id, data });
        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default atualizarFinalController;
