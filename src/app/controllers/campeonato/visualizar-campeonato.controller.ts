import { Request, Response } from "express";
import VisualizarCampeonatoUseCase from "../../../domain/usecase/campeonato/visualizar-campeonato.usecase.js";
import VisualizarCampeonatoAdapter from "../../../infra/adapters/campeonato/visualizar-campeonato.adapter.js";

const visualizarCampeonatoController = async (req: Request, res: Response) => {
        try {
            const adapter = new VisualizarCampeonatoAdapter();

            const usecase = new VisualizarCampeonatoUseCase(adapter);

            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: 'O ID da agenda é obrigatório' });
            }
            const result = await usecase.execute(id);
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

export default visualizarCampeonatoController;