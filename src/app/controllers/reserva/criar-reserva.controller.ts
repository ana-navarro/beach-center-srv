import { Request, Response } from "express";
import { validationResult } from "express-validator";
import CriarReservaUseCase from "../../../domain/usecase/reserva/criar-reserva.usecase.js";
import CriarReservaAdapter from "../../../infra/adapters/reserva/criar-reserva.adapter.js";
import { validReservaItem } from "./reserva.validation.js";

const criarReservaController = async (req: Request, res: Response) => {
    try {
        const adapter = new CriarReservaAdapter();

        const usecase = new CriarReservaUseCase(adapter);

        await Promise.all(validReservaItem.map(validation => validation.run(req)));
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            agenda_id,
            nome,
            telefone,
            email,
            pago,
            precisa_materias,
            materiais,
        } = req.body;

        const data = {
            agenda_id,
            nome,
            telefone,
            email,
            pago,
            precisa_materias,
            materiais,
        }

        const result = await usecase.execute(data);

        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

export default criarReservaController;