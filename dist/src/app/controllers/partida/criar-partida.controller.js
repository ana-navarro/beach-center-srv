import { validationResult } from "express-validator";
import CriarPartidaUseCase from "../../../domain/usecase/partida/criar-partida.usecase.js";
import CriarPartidaAdapter from "../../../infra/adapters/partida/criar-partida.adapter.js";
import { validPartidaItem } from "./partida.validation.js";
const criarPartidaController = async (req, res) => {
    try {
        const adapter = new CriarPartidaAdapter();
        const usecase = new CriarPartidaUseCase(adapter);
        await Promise.all(validPartidaItem.map(validation => validation.run(req)));
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { competidores, placar_competidor_1, placar_competidor_2, vencedor, horaInicio, horaFim, dataPartida, status, } = req.body;
        const data = {
            competidores,
            placar_competidor_1,
            placar_competidor_2,
            vencedor,
            horaInicio,
            horaFim,
            dataPartida,
            status,
        };
        const result = await usecase.execute(data);
        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default criarPartidaController;
