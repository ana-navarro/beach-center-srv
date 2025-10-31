import { Request, Response } from "express";
import VisualizarFinalUseCase from "../../../domain/usecase/final/visualizar-final.usecase.js";
import VisualizarFinalAdapter from "../../../infra/adapters/final/visualizar-final.adapter.js";

const visualizarFinalController = async (req: Request, res: Response) => {
    try {
        const adapter = new VisualizarFinalAdapter();
        const usecase = new VisualizarFinalUseCase(adapter);

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'O ID da final é obrigatório' });
        }

        const response = await usecase.execute(id);

        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default visualizarFinalController;