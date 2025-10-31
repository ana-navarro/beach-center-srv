import { Router } from "express";
import AuthService from "../config/auth.config.js";
import atualizarUsuarioController from "../controllers/usuario/atualizar-usuario.controller.js";
import criarUsuarioController from "../controllers/usuario/criar-usuario.controller.js";
import deletarUsuarioController from "../controllers/usuario/deletar-usuario.controller.js";
import listarUsuarioController from "../controllers/usuario/listar-usuarios.controller.js";
import visualizarUsuarioController from "../controllers/usuario/visualizar-usuario.controller.js";

const usuarioRoutes = Router();

usuarioRoutes.get("", AuthService.checkToken, listarUsuarioController);
usuarioRoutes.get(":id", AuthService.checkToken, visualizarUsuarioController);
usuarioRoutes.put(":id", AuthService.checkToken, atualizarUsuarioController);
usuarioRoutes.post("", AuthService.checkToken, criarUsuarioController);
usuarioRoutes.delete(":id", AuthService.checkToken, deletarUsuarioController);

export default usuarioRoutes;