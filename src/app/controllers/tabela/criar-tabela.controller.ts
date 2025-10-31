import { Request, Response } from "express";
import { validationResult } from "express-validator";
import CriarTabelaUseCase from "../../../domain/usecase/tabela/criar-tabela.usecase.js";
import CriarTabelaAdapter from "../../../infra/adapters/tabela/criar-tabela.adapter.js";
import { validTabelaItem } from "./tabela.validation.js";

const criarTabelaController = async (req: Request, res: Response) => {
    try {
        const adapter = new CriarTabelaAdapter();

        const usecase = new CriarTabelaUseCase(adapter);

        await Promise.all(validTabelaItem.map(validation => validation.run(req)));
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            pontos,
            jogos,
            vitorias,
            derrotas,
            saldo_gols,
        } = req.body.celula

        const data_celula = {
            pontos,
            jogos,
            vitorias,
            derrotas,
            saldo_gols,
        }

        const data = {
            participante_id: req.body.participante_id,
            celula: data_celula
        }

        const result = await usecase.execute(data);

        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default criarTabelaController;