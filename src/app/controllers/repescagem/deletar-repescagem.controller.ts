import { Request, Response } from "express";
import DeletarRepescagemUseCase from "../../../domain/usecase/repescagem/deletar-repescagem.usecase.js";
import DeletarRepescagemAdapter from "../../../infra/adapters/repescagem/deletar-repescagem.adapter.js";

const deletarRepescagemController = async (req: Request, res: Response) => {
    try {
        const adapter = new DeletarRepescagemAdapter();
        const usecase = new DeletarRepescagemUseCase(adapter);

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'O ID da repescagem é obrigatório' });
        }

        await usecase.execute(id);

        return res.status(200).json({ message: 'Final deletado com sucesso!' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default deletarRepescagemController;