import { validationResult } from "express-validator";
import { Request, Response } from "express";
import CriarCampeonatoUseCase from "../../../domain/usecase/campeonato/criar-campeonato.usecase.js";
import { ICampeonatoRequest } from "../../../infra/adapters/campeonato/campeonato.type.js";
import CriarCampeonatoAdapter from "../../../infra/adapters/campeonato/criar-campeonato.adapter.js";
import { validCampeonatoItem } from "./campeonato.validation.js";

const criarCampeonatoController = async (req: Request, res: Response) => {
    try {
        const adapter = new CriarCampeonatoAdapter();
        const usecase = new CriarCampeonatoUseCase(adapter);

        await Promise.all(validCampeonatoItem.map(validation => validation.run(req)));
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { titulo, esporte, descricao, dataInicio, dataFim, status } = req.body;

        const data: ICampeonatoRequest = {
            titulo,
            esporte,
            descricao,
            dataInicio: new Date(dataInicio),
            dataFim: new Date(dataFim),
            status,
        };

        const result = await usecase.execute({ data });

        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default criarCampeonatoController;