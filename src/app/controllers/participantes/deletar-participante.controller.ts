import { Request, Response } from "express";
import DeletarParticipanteUseCase from "../../../domain/usecase/participantes/deletar-participante.usecase.js";
import DeletarParticipanteAdapter from "../../../infra/adapters/participantes/deletar-participante.adapter.js";

const deletarParticipanteController = async (req: Request, res: Response) => {
    try {
        const adapter = new DeletarParticipanteAdapter();
        const usecase = new DeletarParticipanteUseCase(adapter);

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'O ID do participante é obrigatório' });
        }

        await usecase.execute(id);

        return res.status(200).json({ message: 'Participante deletado com sucesso!' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default deletarParticipanteController;