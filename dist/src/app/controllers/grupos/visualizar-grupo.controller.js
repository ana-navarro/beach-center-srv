import VisualizarGrupoUseCase from "../../../domain/usecase/grupos/visualizar-grupo.usecase.js";
import VisualizarGrupoAdapter from "../../../infra/adapters/grupos/visualizar-grupo.adapter.js";
const visualizarGrupoController = async (req, res) => {
    try {
        const adapter = new VisualizarGrupoAdapter();
        const usecase = new VisualizarGrupoUseCase(adapter);
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'O ID do grupo é obrigatório' });
        }
        const response = await usecase.execute(id);
        return res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default visualizarGrupoController;
