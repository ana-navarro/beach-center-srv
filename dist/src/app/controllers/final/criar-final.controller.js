import { validationResult } from "express-validator";
import CriarFinalUseCase from "../../../domain/usecase/final/criar-final.usecase.js";
import CriarFinalAdapter from "../../../infra/adapters/final/criar-final.adapter.js";
import { validFinalItem } from "./final.validation.js";
const criarFinalController = async (req, res) => {
    try {
        const adapter = new CriarFinalAdapter();
        const usecase = new CriarFinalUseCase(adapter);
        await Promise.all(validFinalItem.map(validation => validation.run(req)));
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { etapa, partida_id, vencedores } = req.body;
        const data = {
            etapa,
            partida_id,
            vencedores,
        };
        const result = await usecase.execute(data);
        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default criarFinalController;
