import { validationResult } from "express-validator";
import CriarRepescagemUseCase from "../../../domain/usecase/repescagem/criar-repescagem.usecase.js";
import CriarRepescagemAdapter from "../../../infra/adapters/repescagem/criar-repescagem.adapter.js";
import { validRepescagemItem } from "./repescagem.validation.js";
const criarRepescagemController = async (req, res) => {
    try {
        const adapter = new CriarRepescagemAdapter();
        const usecase = new CriarRepescagemUseCase(adapter);
        await Promise.all(validRepescagemItem.map(validation => validation.run(req)));
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
export default criarRepescagemController;
