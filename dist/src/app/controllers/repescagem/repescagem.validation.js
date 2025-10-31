import { check } from "express-validator";
export const validRepescagemItem = [
    check('etapa')
        .notEmpty().withMessage('O campo etapa não pode ser vázio')
        .isString().withMessage('O campo etapa tem que ser string'),
    check('partida_id')
        .optional()
        .isArray().withMessage('partida_id deve ser um array'),
    check('partida_id.*')
        .optional()
        .isMongoId().withMessage('IDs das partidas inválidos'),
    check('vencedores')
        .optional()
        .isArray().withMessage('vencedores deve ser um array'),
    check('vencedores.*')
        .optional()
        .isMongoId().withMessage('IDs dos vencedores inválidos'),
];
