import { validationResult } from "express-validator";
import { Request, Response } from "express";
import AtualizarAgendaAdapter from "../../../infra/adapters/agenda/atualizar-agenda.adapter.js";
import AtualizarAgendaUseCase from "../../../domain/usecase/agenda/atualizar-agenda.usecase.js";
import { validAgendaItem } from "./agenda.validation.js";

const atualizarAgendaController = async (req: Request, res: Response) => {
    try {
        const adapter = new AtualizarAgendaAdapter();

        const usecase = new AtualizarAgendaUseCase(adapter);

        await Promise.all(validAgendaItem.map(validation => validation.run(req)));
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'O ID da agenda é obrigatório' });
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


        const result = await usecase.execute({ id, data });

        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}


export default atualizarAgendaController;