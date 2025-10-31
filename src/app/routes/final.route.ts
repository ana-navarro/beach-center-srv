import { Router } from "express";
import AuthService from "../config/auth.config.js";
import atualizarFinalController from "../controllers/final/atualizar-final.controller.js";
import criarFinalController from "../controllers/final/criar-final.controller.js";
import deletarFinalController from "../controllers/final/deletar-final.controller.js";
import listarFinalController from "../controllers/final/listar-finais.controller.js";
import visualizarFinalController from "../controllers/final/visualizar-final.controller.js";

const finalRoutes = Router();

finalRoutes.get("", AuthService.checkToken, listarFinalController);
finalRoutes.get(":id", AuthService.checkToken, visualizarFinalController);
finalRoutes.put(":id", AuthService.checkToken, atualizarFinalController);
finalRoutes.post("", AuthService.checkToken, criarFinalController);
finalRoutes.delete(":id", AuthService.checkToken, deletarFinalController);

export default finalRoutes;