import { check } from "express-validator";

export const validUsuarioItem = [
	check('nome')
		.notEmpty().withMessage('O campo nome não pode ser vázio')
		.isString().withMessage('O campo nome tem que ser string'),

	check('telefone')
		.notEmpty().withMessage('O campo telefone não pode ser vázio')
		.isString().withMessage('O campo telefone tem que ser string'),

	check('password')
		.notEmpty().withMessage('O campo senha é obrigatório')
		.isString().withMessage('A senha deve ser uma string')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, 'i').withMessage('A senha precisa de pelo menos uma letra maíscula, minuscula, um numero e caractere especial')
		.isLength({ min: 8, max: 64 }).withMessage('A senha deve ter entre 8 e 64 caracteres'),

	check('email')
		.notEmpty().withMessage('O campo email não pode ser vázio')
		.isEmail().withMessage('O campo email deve ser um endereço de email válido'),

	check('tipo')
		.notEmpty().withMessage('O campo tipo é obrigatório')
		.isIn(['administrador', 'cliente', 'professor']).withMessage('tipo inválido'),
];
