import { Response } from "express";
import ListarRepescagemUseCase from "../../../domain/usecase/repescagem/listar-repescagem.usecase.js";
import ListarRepescagemAdapter from "../../../infra/adapters/repescagem/listar-repescagem.adapter.js";

const listarRepescagemController = async (res: Response) => {
    try {
        const adapter = new ListarRepescagemAdapter();
        const usecase = new ListarRepescagemUseCase(adapter);

        const response = await usecase.execute();

        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default listarRepescagemController;