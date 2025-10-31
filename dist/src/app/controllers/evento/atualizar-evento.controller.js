import { validationResult } from "express-validator";
import AtualizarEventoUsecase from "../../../domain/usecase/evento/atualizar-evento.usecase.js";
import AtualizarEventoAdapter from "../../../infra/adapters/evento/atualizar-evento.adapter.js";
import { validEventoItem, validParticipanteSolo, validParticipanteDupla, validParticipanteTime } from "./evento.validation.js";
const atualizarEventoController = async (req, res) => {
    try {
        await Promise.all(validEventoItem.map(validation => validation.run(req)));
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array().map((error) => ({
                    field: error.type === 'field' ? error.path : '',
                    message: error.msg
                }))
            });
        }
        if (req.body.tipo) {
            let participantValidations;
            switch (req.body.tipo) {
                case 'individual':
                    participantValidations = validParticipanteSolo;
                    break;
                case 'dupla':
                    participantValidations = validParticipanteDupla;
                    break;
                case 'time':
                    participantValidations = validParticipanteTime;
                    break;
                default:
                    return res.status(400).json({ message: 'Tipo de participante inválido' });
            }
            await Promise.all(participantValidations.map(validation => validation.run(req)));
            const participantErrors = validationResult(req);
            if (!participantErrors.isEmpty()) {
                return res.status(400).json({
                    errors: participantErrors.array().map((error) => ({
                        field: error.type === 'field' ? error.path : '',
                        message: error.msg
                    }))
                });
            }
        }
        const adapter = new AtualizarEventoAdapter();
        const usecase = new AtualizarEventoUsecase(adapter);
        const result = await usecase.execute({
            id: req.params.id,
            ...req.body
        });
        if (!result) {
            return res.status(404).json({ message: 'Evento não encontrado' });
        }
        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default atualizarEventoController;
