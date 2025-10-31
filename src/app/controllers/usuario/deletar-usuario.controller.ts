import { Request, Response } from "express";
import DeletarUsuarioUseCase from "../../../domain/usecase/usuario/deletar-usuario.usecase.js";
import DeletarUsuarioAdapter from "../../../infra/adapters/usuario/deletar-usuario.adapter.js";

const deletarUsuarioController = async (req: Request, res: Response) => {
    try {
        const adapter = new DeletarUsuarioAdapter();
        const usecase = new DeletarUsuarioUseCase(adapter);

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'O ID do usuario é obrigatório' });
        }

        await usecase.execute(id);

        return res.status(200).json({ message: 'Usuario deletado com sucesso!' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default deletarUsuarioController;