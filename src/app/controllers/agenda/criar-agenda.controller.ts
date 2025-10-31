import { validationResult } from "express-validator";
import { Request, Response } from "express";
import CriarAgendaUseCase from "../../../domain/usecase/agenda/criar-agenda.usecase.js";
import CriarAgendaAdapter from "../../../infra/adapters/agenda/criar-agenda.adapter.js";
import { validAgendaItem } from "./agenda.validation.js";

const criarAgendaController = async (req: Request, res: Response) => {
    try {
        const adapter = new CriarAgendaAdapter();
        const usecase = new CriarAgendaUseCase(adapter);

        await Promise.all(validAgendaItem.map(validation => validation.run(req)));
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { dia, horarioInicio, horaFim, local, quadra, disponivel } = req.body;

        const data = {
            dia: new Date(dia),
            horarioInicio,
            horaFim,
            local,
            quadra,
            disponivel
        }


        const result = await usecase.execute(data);

        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default criarAgendaController;