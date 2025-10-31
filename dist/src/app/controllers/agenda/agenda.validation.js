import { check } from "express-validator";
export const validAgendaItem = [
    check('dia').notEmpty().withMessage('O campo dia é obrigatório').isISO8601().toDate().withMessage('O campo dia deve ser uma data válida'),
    check('horarioInicio').notEmpty().withMessage('O campo horário de início é obrigatório').matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/).withMessage('O campo horário de início deve estar no formato HH:mm'),
    check('horaFim').notEmpty().withMessage('O campo hora fim é obrigatório').matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/).withMessage('O campo hora fim deve estar no formato HH:mm'),
    check('local').notEmpty().withMessage('O campo local é obrigatório').isString().withMessage('O campo local deve ser uma string'),
    check('quadra').notEmpty().withMessage('O campo quadra é obrigatório').isString().withMessage('O campo quadra deve ser uma string'),
    check('disponivel').notEmpty().withMessage('O campo disponível é obrigatório').isBoolean().withMessage('O campo disponível deve ser um valor booleano')
];
