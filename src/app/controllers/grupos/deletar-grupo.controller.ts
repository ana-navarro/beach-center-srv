import { Request, Response } from "express";
import DeletarGrupoUseCase from "../../../domain/usecase/grupos/deletar-grupo.usecase.js";
import DeletarGrupoAdapter from "../../../infra/adapters/grupos/deletar-grupo.adapter.js";

const deletarGrupoController = async (req: Request, res: Response) => {
    try {
        const adapter = new DeletarGrupoAdapter();
        const usecase = new DeletarGrupoUseCase(adapter);

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'O ID do grupo é obrigatório' });
        }

        await usecase.execute(id);

        return res.status(200).json({ message: 'Grupo deletado com sucesso!' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default deletarGrupoController;