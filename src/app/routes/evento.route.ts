import { Router } from "express";
import AuthService from "../config/auth.config.js";
import atualizarEventoController from "../controllers/evento/atualizar-evento.controller.js";
import criarEventoController from "../controllers/evento/criar-evento.controller.js";
import deletarEventoController from "../controllers/evento/deletar-evento.controller.js";
import listarEventosController from "../controllers/evento/listar-eventos.controller.js";
import visualizarEventoController from "../controllers/evento/visualizar-evento.controller.js";

const eventoRoutes = Router();

eventoRoutes.get("", AuthService.checkToken, listarEventosController);
eventoRoutes.get(":id", AuthService.checkToken, visualizarEventoController);
eventoRoutes.put(":id", AuthService.checkToken, atualizarEventoController);
eventoRoutes.post("", AuthService.checkToken, criarEventoController);
eventoRoutes.delete(":id", AuthService.checkToken, deletarEventoController);

export default eventoRoutes;