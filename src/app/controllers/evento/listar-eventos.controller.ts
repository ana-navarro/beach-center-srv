import { Response } from "express";
import ListarEventoUseCase from "../../../domain/usecase/evento/listar-eventos.usecase.js";
import ListarEventosAdapter from "../../../infra/adapters/evento/listar-eventos.adapter.js";

const listarEventosController = async (res: Response) => {
    try {
        const adapter = new ListarEventosAdapter();

        const usecase = new ListarEventoUseCase(adapter);

        const result = await usecase.execute();
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default listarEventosController;