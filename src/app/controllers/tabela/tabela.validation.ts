import { check } from "express-validator";

export const validTabelaItem = [
	check('participante_id')
		.notEmpty().withMessage('participante_id é obrigatório')
		.isMongoId().withMessage('ID do participante inválido'),
	check('celula').notEmpty().withMessage('celula é obrigatório'),
	check('celula.pontos')
		.notEmpty().withMessage('celula.pontos é obrigatório')
		.isInt().withMessage('celula.pontos deve ser um inteiro'),
	check('celula.jogos')
		.notEmpty().withMessage('celula.jogos é obrigatório')
		.isInt().withMessage('celula.jogos deve ser um inteiro'),
	check('celula.vitorias')
		.notEmpty().withMessage('celula.vitorias é obrigatório')
		.isInt().withMessage('celula.vitorias deve ser um inteiro'),
	check('celula.derrotas')
		.notEmpty().withMessage('celula.derrotas é obrigatório')
		.isInt().withMessage('celula.derrotas deve ser um inteiro'),
	check('celula.saldo_gols')
		.notEmpty().withMessage('celula.saldo_gols é obrigatório')
		.isInt().withMessage('celula.saldo_gols deve ser um inteiro'),
];
