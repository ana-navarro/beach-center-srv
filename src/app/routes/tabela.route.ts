import { Router } from "express";
import AuthService from "../config/auth.config.js";
import atualizarTabelaController from "../controllers/tabela/atualizar-tabela.controller.js";
import criarTabelaController from "../controllers/tabela/criar-tabela.controller.js";
import deletarTabelaController from "../controllers/tabela/deletar-tabela.controller.js";
import listarTabelaController from "../controllers/tabela/listar-tabelas.controller.js";
import visualizarTabelaController from "../controllers/tabela/visualizar-tabela.controller.js";

const tabelaRoutes = Router();

tabelaRoutes.get("", AuthService.checkToken, listarTabelaController);
tabelaRoutes.get(":id", AuthService.checkToken, visualizarTabelaController);
tabelaRoutes.put(":id", AuthService.checkToken, atualizarTabelaController);
tabelaRoutes.post("", AuthService.checkToken, criarTabelaController);
tabelaRoutes.delete(":id", AuthService.checkToken, deletarTabelaController);

export default tabelaRoutes;