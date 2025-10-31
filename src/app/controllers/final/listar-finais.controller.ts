import { Response } from "express";
import ListarFinalUseCase from "../../../domain/usecase/final/listar-finais.usecase.js";
import ListarFinalAdapter from "../../../infra/adapters/final/listar-finais.adapter.js";

const listarFinalController = async (res: Response) => {
    try {
        const adapter = new ListarFinalAdapter();
        const usecase = new ListarFinalUseCase(adapter);

        const response = await usecase.execute();

        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default listarFinalController;