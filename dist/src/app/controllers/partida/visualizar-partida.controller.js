import VisualizarPartidaUseCase from "../../../domain/usecase/partida/visualizar-partida.usecase.js";
import VisualizarPartidaAdapter from "../../../infra/adapters/partida/visualizar-partida.adapter.js";
const visualizarPartidaController = async (req, res) => {
    try {
        const adapter = new VisualizarPartidaAdapter();
        const usecase = new VisualizarPartidaUseCase(adapter);
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'O ID da partida é obrigatório' });
        }
        const response = await usecase.execute(id);
        return res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default visualizarPartidaController;
