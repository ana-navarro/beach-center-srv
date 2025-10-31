import { check } from "express-validator";
import { Status } from "../../../domain/domain/campeonato.js";

export const validCampeonatoItem = [
    check('titulo').notEmpty().withMessage('O campo titulo não pode ser vázio').isString().withMessage('O campo titulo tem que ser string'),
    check('esporte').notEmpty().withMessage('O campo esporte não pode ser vázio').isString().withMessage('O campo esporte tem que ser string'),
    check('dataInicio').notEmpty().withMessage('O campo dataInicio é obrigatório').isISO8601().toDate().withMessage('O campo dataInicio deve ser uma data válida'),
    check('dataFim').notEmpty().withMessage('O campo dataFim é obrigatório').isISO8601().toDate().withMessage('O campo dataFim deve ser uma data válida'),
    check('status')
        .notEmpty().withMessage('O campo status é obrigatório')
        .isString().withMessage('O campo status deve ser uma string')
        .withMessage(`O campo status deve ser um dos seguintes valores: ${Object.values(Status).join(', ')}`)
];
