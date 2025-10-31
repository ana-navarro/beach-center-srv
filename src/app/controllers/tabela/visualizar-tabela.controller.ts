import { Request, Response } from "express";
import VisualizarTabelaUseCase from "../../../domain/usecase/tabela/visualizar-tabela.usecase.js";
import VisualizarTabelaAdapter from "../../../infra/adapters/tabela/visualizar-tabela.adapter.js";

const visualizarTabelaController = async (req: Request, res: Response) => {
    try {
        const adapter = new VisualizarTabelaAdapter();
        const usecase = new VisualizarTabelaUseCase(adapter);


        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'O ID da tabela é obrigatório' });
        }

        const response = await usecase.execute(id);

        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default visualizarTabelaController;