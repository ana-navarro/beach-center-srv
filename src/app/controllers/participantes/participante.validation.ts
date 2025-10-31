import { check } from "express-validator";

export const validParticipanteItem = [
	check('evento_id')
		.optional()
		.isArray().withMessage('evento_id deve ser um array'),
	check('evento_id.*')
		.optional()
		.isMongoId().withMessage('IDs dos eventos inválidos'),

	check('nome')
		.notEmpty().withMessage('O campo nome não pode ser vázio')
		.isString().withMessage('O campo nome tem que ser string'),

	check('telefone')
		.notEmpty().withMessage('O campo telefone não pode ser vázio')
		.isString().withMessage('O campo telefone tem que ser string'),

	check('email')
		.notEmpty().withMessage('O campo email não pode ser vázio')
		.isEmail().withMessage('O campo email deve ser um endereço de email válido'),
];

