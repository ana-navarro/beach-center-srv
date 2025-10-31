import { Request, Response } from "express";
import VisualizarReservaUseCase from "../../../domain/usecase/reserva/visualizar-reserva.usecase.js";
import VisualizarReservaAdapter from "../../../infra/adapters/reserva/visualizar-reserva.adapter.js";

const visualizarReservaController = async (req: Request, res: Response) => {
    try {
        const adapter = new VisualizarReservaAdapter();
        const usecase = new VisualizarReservaUseCase(adapter);

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'O ID da reserva é obrigatório' });
        }

        const response = await usecase.execute(id);

        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default visualizarReservaController;