import { Response } from "express";
import ListarTabelaUseCase from "../../../domain/usecase/tabela/listar-tabelas.usecase.js";
import ListarTabelaAdapter from "../../../infra/adapters/tabela/listar-tabelas.adapter.js";

const listarTabelaController = async (res: Response) => {
    try {
        const adapter = new ListarTabelaAdapter();
        const usecase = new ListarTabelaUseCase(adapter);

        const response = await usecase.execute();

        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default listarTabelaController;