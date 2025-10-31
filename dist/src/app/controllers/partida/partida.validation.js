import { check } from "express-validator";
export const validPartidaItem = [
    check('competidores')
        .optional()
        .isArray().withMessage('competidores deve ser um array'),
    check('competidores.*')
        .optional()
        .isMongoId().withMessage('IDs dos competidores inválidos'),
    check('placar_competidor_1')
        .notEmpty().withMessage('placar_competidor_1 é obrigatório')
        .isInt({ min: 0 }).withMessage('placar_competidor_1 deve ser um inteiro >= 0'),
    check('placar_competidor_2')
        .notEmpty().withMessage('placar_competidor_2 é obrigatório')
        .isInt({ min: 0 }).withMessage('placar_competidor_2 deve ser um inteiro >= 0'),
    check('vencedor')
        .optional()
        .isMongoId().withMessage('ID do vencedor inválido'),
    check('horaInicio')
        .notEmpty().withMessage('horaInicio é obrigatório')
        .isISO8601().toDate().withMessage('horaInicio deve ser uma data/hora válida'),
    check('horaFim')
        .notEmpty().withMessage('horaFim é obrigatório')
        .isISO8601().toDate().withMessage('horaFim deve ser uma data/hora válida'),
    check('dataPartida')
        .notEmpty().withMessage('dataPartida é obrigatório')
        .isISO8601().toDate().withMessage('dataPartida deve ser uma data válida'),
    check('status')
        .notEmpty().withMessage('status é obrigatório')
        .isIn(['agendada', 'em_andamento', 'finalizada', 'cancelada']).withMessage('status inválido'),
];
