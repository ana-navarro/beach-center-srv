import { Request, Response } from "express";
import VisualizarEventoUseCase from "../../../domain/usecase/evento/visualizar-evento.usecase.js";
import VisualizarEventoAdapter from "../../../infra/adapters/evento/visualizar-evento.adapter.js";

const visualizarEventoController = async (req: Request, res: Response) => {
    try {
        const adapter = new VisualizarEventoAdapter();

        const usecase = new VisualizarEventoUseCase(adapter);

        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'O ID do evento é obrigatório' });
        }
        const result = await usecase.execute(id);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default visualizarEventoController;