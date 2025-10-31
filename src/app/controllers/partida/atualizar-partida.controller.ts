import { Request, Response } from "express";
import { validationResult } from "express-validator";
import AtualizarPartidaUseCase from "../../../domain/usecase/partida/atualizar-partida.usecase.js";
import AtualizarPartidaAdapter from "../../../infra/adapters/partida/atualizar-partida.adapter.js";
import { validPartidaItem } from "./partida.validation.js";

const atualizarPartidaController = async (req: Request, res: Response) => {
    try {
        const adapter = new AtualizarPartidaAdapter();

        const usecase = new AtualizarPartidaUseCase(adapter);

        await Promise.all(validPartidaItem.map(validation => validation.run(req)));
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'O ID da partida é obrigatório' });
        }

        const {
            competidores,
            placar_competidor_1,
            placar_competidor_2,
            vencedor,
            horaInicio,
            horaFim,
            dataPartida,
            status,
        } = req.body;

        const data = {
            competidores,
            placar_competidor_1,
            placar_competidor_2,
            vencedor,
            horaInicio,
            horaFim,
            dataPartida,
            status,
        }

        const result = await usecase.execute({ id, data });

        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default atualizarPartidaController;