import { Router } from "express";
import AuthService from "../config/auth.config.js";
import atualizarParticipanteController from "../controllers/participantes/atualizar-participante.controller.js";
import criarParticipanteController from "../controllers/participantes/criar-participante.controller.js";
import deletarParticipanteController from "../controllers/participantes/deletar-participante.controller.js";
import listarParticipanteController from "../controllers/participantes/listar-participantes.controller.js";
import visualizarParticipanteController from "../controllers/participantes/visualizar-participante.controller.js";

const participanteRoutes = Router();

participanteRoutes.get("", AuthService.checkToken, listarParticipanteController);
participanteRoutes.get(":id", AuthService.checkToken, visualizarParticipanteController);
participanteRoutes.put(":id", AuthService.checkToken, atualizarParticipanteController);
participanteRoutes.post("", AuthService.checkToken, criarParticipanteController);
participanteRoutes.delete(":id", AuthService.checkToken, deletarParticipanteController);

export default participanteRoutes;