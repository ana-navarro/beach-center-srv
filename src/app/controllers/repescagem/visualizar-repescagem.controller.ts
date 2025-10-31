import { Request, Response } from "express";
import VisualizarRepescagemUseCase from "../../../domain/usecase/repescagem/visualizar-repescagem.usecase.js";
import VisualizarRepescagemAdapter from "../../../infra/adapters/repescagem/visualizar-repescagem.adapter.js";

const visualizarRepescagemController = async (req: Request, res: Response) => {
    try {
        const adapter = new VisualizarRepescagemAdapter();
        const usecase = new VisualizarRepescagemUseCase(adapter);

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'O ID da repescagem é obrigatório' });
        }

        const response = await usecase.execute(id);

        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default visualizarRepescagemController;