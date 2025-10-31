import { Request, Response } from "express";
import { validationResult } from "express-validator";
import AtualizarRepescagemUseCase from "../../../domain/usecase/repescagem/atualizar-repescagem.usecase.js";
import AtualizarRepescagemAdapter from "../../../infra/adapters/repescagem/atualizar-repescagem.adapter.js";
import { validRepescagemItem } from "./repescagem.validation.js";

const atualizarRepescagemController = async (req: Request, res: Response) => {
    try {
        const adapter = new AtualizarRepescagemAdapter();

        const usecase = new AtualizarRepescagemUseCase(adapter);

        await Promise.all(validRepescagemItem.map(validation => validation.run(req)));
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'O ID da repescagem é obrigatório' });
        }

        const {
            etapa,
            partida_id,
            vencedores
        } = req.body;

        const data = {
            etapa,
            partida_id,
            vencedores,
        }

        const result = await usecase.execute({ id, data });

        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default atualizarRepescagemController;