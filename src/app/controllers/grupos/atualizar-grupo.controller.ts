import { Request, Response } from "express";
import { validationResult } from "express-validator";
import AtualizarGrupoUseCase from "../../../domain/usecase/grupos/atualizar-grupo.usecase.js";
import AtualizarGrupoAdapter from "../../../infra/adapters/grupos/atualizar-grupo.adapter.js";
import { validGrupoItem } from "./grupo.validation.js";

const atualizarGrupoController = async (req: Request, res: Response) => {
    try {
        const adapter = new AtualizarGrupoAdapter();

        const usecase = new AtualizarGrupoUseCase(adapter);

        await Promise.all(validGrupoItem.map(validation => validation.run(req)));
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'O ID do grupo é obrigatório' });
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

        const result = await usecase.execute({ id, data });

        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default atualizarGrupoController;