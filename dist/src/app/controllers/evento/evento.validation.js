import { check } from "express-validator";
export const validParticipanteSolo = [
    check('tipo').equals('individual').withMessage('Tipo deve ser individual'),
    check('participante_id').notEmpty().isMongoId().withMessage('ID do participante inválido')
];
export const validParticipanteDupla = [
    check('tipo').equals('dupla').withMessage('Tipo deve ser dupla'),
    check('participante1_id').notEmpty().isMongoId().withMessage('ID do primeiro participante inválido'),
    check('participante2_id').notEmpty().isMongoId().withMessage('ID do segundo participante inválido')
];
export const validParticipanteTime = [
    check('tipo').equals('time').withMessage('Tipo deve ser time'),
    check('nome_time').notEmpty().withMessage('Nome do time é obrigatório'),
    check('membros_id').isArray().notEmpty().withMessage('Lista de membros é obrigatória'),
    check('membros_id.*').isMongoId().withMessage('IDs dos membros devem ser válidos')
];
export const validEventoItem = [
    check('titulo').notEmpty().withMessage('Título é obrigatório'),
    check('vagas').notEmpty().isInt({ min: 1 }).withMessage('Número de vagas deve ser maior que zero'),
    check('campeonato_id').notEmpty().isMongoId().withMessage('ID do campeonato inválido'),
    check('grupo_id').optional().isArray().withMessage('Grupos devem ser um array'),
    check('grupo_id.*').optional().isMongoId().withMessage('IDs dos grupos devem ser válidos'),
    check('final_id').optional().isArray().withMessage('Finais devem ser um array'),
    check('final_id.*').optional().isMongoId().withMessage('IDs das finais devem ser válidos'),
    check('repescagem_id').optional().isArray().withMessage('Repescagens devem ser um array'),
    check('repescagem_id.*').optional().isMongoId().withMessage('IDs das repescagens devem ser válidos'),
    check('evento_tipo').notEmpty().withMessage('Tipo do evento é obrigatório'),
    check('status').notEmpty().isIn(['aberto', 'finalizado', 'em_andamento', 'draft', 'cancelado', 'pausado']).withMessage('Status inválido'),
    check('vencedor_id').optional().isMongoId().withMessage('ID do vencedor inválido')
];
