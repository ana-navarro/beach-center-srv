import { Request, Response } from "express";
import DeletarFinalUseCase from "../../../domain/usecase/final/deletar-final.usecase.js";
import DeletarFinalAdapter from "../../../infra/adapters/final/deletar-final.adapter.js";

const deletarFinalController = async (req: Request, res: Response) => {
    try {
        const adapter = new DeletarFinalAdapter();
        const usecase = new DeletarFinalUseCase(adapter);

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'O ID da final é obrigatório' });
        }

        await usecase.execute(id);

        return res.status(200).json({ message: 'Final deletado com sucesso!' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default deletarFinalController;