import { check } from "express-validator";

export const validGrupoItem = [
    check('titulo')
        .notEmpty().withMessage('O campo titulo não pode ser vázio')
        .isString().withMessage('O campo titulo tem que ser string'),

    check('participantes_id')
        .optional()
        .isArray().withMessage('participantes_id deve ser um array'),
    check('participantes_id.*')
        .optional()
        .isMongoId().withMessage('IDs dos participantes inválidos'),

    check('tabelas_ids')
        .optional()
        .isArray().withMessage('tabelas_ids deve ser um array'),
    check('tabelas_ids.*')
        .optional()
        .isMongoId().withMessage('IDs das tabelas inválidos'),
];