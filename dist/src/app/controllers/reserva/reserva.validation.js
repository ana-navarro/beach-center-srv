import { check } from "express-validator";
export const validReservaItem = [
    check('agenda_id')
        .notEmpty().withMessage('agenda_id é obrigatório')
        .isMongoId().withMessage('ID da agenda inválido'),
    check('nome')
        .notEmpty().withMessage('O campo nome não pode ser vázio')
        .isString().withMessage('O campo nome tem que ser string'),
    check('telefone')
        .notEmpty().withMessage('O campo telefone não pode ser vázio')
        .isString().withMessage('O campo telefone tem que ser string'),
    check('email')
        .notEmpty().withMessage('O campo email não pode ser vázio')
        .isEmail().withMessage('O campo email deve ser um endereço de email válido'),
    check('pago')
        .notEmpty().withMessage('O campo pago é obrigatório')
        .isBoolean().withMessage('pago deve ser booleano'),
    check('precisa_materias')
        .notEmpty().withMessage('O campo precisa_materias é obrigatório')
        .isBoolean().withMessage('precisa_materias deve ser booleano'),
    check('materiais')
        .optional()
        .isArray().withMessage('materiais deve ser um array de strings'),
    check('materiais.*')
        .optional()
        .isString().withMessage('cada item de materiais deve ser string'),
];
