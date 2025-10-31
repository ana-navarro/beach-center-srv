import { validationResult } from "express-validator";
import { Request, Response } from "express";
import AtualizarCampeonatoAdapter from "../../../infra/adapters/campeonato/atualizar-campeonato.adapter.js";
import AtualizarCampeonatoUseCase from "../../../domain/usecase/campeonato/atualizar-campeonato.usecase.js";
import { validCampeonatoItem } from "./campeonato.validation.js";

const atualizarCampeonatoController = async (req: Request, res: Response) => {
    try {
        const adapter = new AtualizarCampeonatoAdapter();

        const usecase = new AtualizarCampeonatoUseCase(adapter);

        await Promise.all(validCampeonatoItem.map(validation => validation.run(req)));
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'O ID do campeonato é obrigatório' });
        }

        const { titulo, esporte, dataInicio, dataFim, status, descricao } = req.body;

        const data = {
            titulo,
            esporte,
            descricao,
            dataInicio: new Date(dataInicio),
            dataFim: new Date(dataFim),
            status,
        };

        const result = await usecase.execute({ id, data });

        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}


export default atualizarCampeonatoController;