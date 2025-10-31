import { Response } from "express";
import ListarParticipanteUseCase from "../../../domain/usecase/participantes/listar-participantes.usecase.js";
import ListarParticipanteAdapter from "../../../infra/adapters/participantes/listar-participantes.adapter.js";

const listarParticipanteController = async (res: Response) => {
    try {
        const adapter = new ListarParticipanteAdapter();
        const usecase = new ListarParticipanteUseCase(adapter);

        const response = await usecase.execute();

        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default listarParticipanteController;