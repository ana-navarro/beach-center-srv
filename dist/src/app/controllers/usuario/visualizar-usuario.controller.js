import VisualizarUsuarioUseCase from "../../../domain/usecase/usuario/visualizar-usuario.usecase.js";
import VisualizarUsuarioAdapter from "../../../infra/adapters/usuario/visualizar-usuario.adapter.js";
const visualizarUsuarioController = async (req, res) => {
    try {
        const adapter = new VisualizarUsuarioAdapter();
        const usecase = new VisualizarUsuarioUseCase(adapter);
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'O ID do usuario é obrigatório' });
        }
        const response = await usecase.execute(id);
        return res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default visualizarUsuarioController;
