import VisualizarParticipanteAdapter from "../../../infra/adapters/participantes/visualizar-participante.adapter.js";
import VisualizarParticipanteUseCase from "../../../domain/usecase/participantes/visualizar-participante.usecase.js";
const visualizarParticipanteController = async (req, res) => {
    try {
        const adapter = new VisualizarParticipanteAdapter();
        const usecase = new VisualizarParticipanteUseCase(adapter);
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'O ID do participante é obrigatório' });
        }
        const response = await usecase.execute(id);
        return res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default visualizarParticipanteController;
