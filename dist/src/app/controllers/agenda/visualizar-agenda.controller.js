import VisualizarAgendaUseCase from "../../../domain/usecase/agenda/visualizar-agenda.usecase.js";
import VisualizarAgendaAdapter from "../../../infra/adapters/agenda/visualizar-agenda.adapter.js";
const visualizarAgendaController = async (req, res) => {
    try {
        const adapter = new VisualizarAgendaAdapter();
        const usecase = new VisualizarAgendaUseCase(adapter);
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'O ID da agenda é obrigatório' });
        }
        const result = await usecase.execute(id);
        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default visualizarAgendaController;
