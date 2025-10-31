import { Request, Response } from "express";
import { validationResult } from "express-validator";
import CriarGrupoUseCase from "../../../domain/usecase/grupos/criar-grupo.usecase.js";
import CriarGrupoAdapter from "../../../infra/adapters/grupos/criar-grupo.adapter.js";
import { validGrupoItem } from "./grupo.validation.js";

const criarGrupoController = async (req: Request, res: Response) => {
    try {
        const adapter = new CriarGrupoAdapter();

        const usecase = new CriarGrupoUseCase(adapter);

        await Promise.all(validGrupoItem.map(validation => validation.run(req)));
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            titulo,
            participantes_id,
            tabelas_ids
        } = req.body;

        const data = {
            titulo,
            participantes_id,
            tabelas_ids,
        }

        const result = await usecase.execute(data);

        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default criarGrupoController;