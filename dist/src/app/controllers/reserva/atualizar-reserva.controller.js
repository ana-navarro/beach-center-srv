import { validationResult } from "express-validator";
import AtualizarReservaUseCase from "../../../domain/usecase/reserva/atualizar-reserva.usecase.js";
import AtualizarReservaAdapter from "../../../infra/adapters/reserva/atualizar-reserva.adapter.js";
import { validReservaItem } from "./reserva.validation.js";
const atualizarReservaController = async (req, res) => {
    try {
        const adapter = new AtualizarReservaAdapter();
        const usecase = new AtualizarReservaUseCase(adapter);
        await Promise.all(validReservaItem.map(validation => validation.run(req)));
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'O ID da reserva é obrigatório' });
        }
        const { agenda_id, nome, telefone, email, pago, precisa_materias, materiais, } = req.body;
        const data = {
            agenda_id,
            nome,
            telefone,
            email,
            pago,
            precisa_materias,
            materiais,
        };
        const result = await usecase.execute({ id, data });
        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default atualizarReservaController;
