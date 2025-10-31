import { Request, Response } from "express";
import DeletarTabelaUseCase from "../../../domain/usecase/tabela/deletar-tabela.usecase.js";
import DeletarTabelaAdapter from "../../../infra/adapters/tabela/deletar-tabela.adapter.js";

const deletarTabelaController = async (req: Request, res: Response) => {
    try {
        const adapter = new DeletarTabelaAdapter();
        const usecase = new DeletarTabelaUseCase(adapter);

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'O ID da tabela é obrigatório' });
        }

        await usecase.execute(id);

        return res.status(200).json({ message: 'Tabela deletada com sucesso!' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default deletarTabelaController;