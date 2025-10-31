import { validationResult } from "express-validator";
import AtualizarTabelaUseCase from "../../../domain/usecase/tabela/atualizar-tabela.usecase.js";
import AtualizarTabelaAdapter from "../../../infra/adapters/tabela/atualizar-tabela.adapter.js";
import { validTabelaItem } from "./tabela.validation.js";
const atualizarTabelaController = async (req, res) => {
    try {
        const adapter = new AtualizarTabelaAdapter();
        const usecase = new AtualizarTabelaUseCase(adapter);
        await Promise.all(validTabelaItem.map(validation => validation.run(req)));
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'O ID da tabela é obrigatório' });
        }
        const { pontos, jogos, vitorias, derrotas, saldo_gols, } = req.body.celula;
        const data_celula = {
            pontos,
            jogos,
            vitorias,
            derrotas,
            saldo_gols,
        };
        const data = {
            participante_id: req.body.participante_id,
            celula: data_celula
        };
        const result = await usecase.execute({ id, data });
        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default atualizarTabelaController;
