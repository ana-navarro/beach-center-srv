import DeletarAgendaAdapter from "../../../infra/adapters/agenda/deletar-agenda.adapter.js";
import DeletarAgendaUseCase from "../../../domain/usecase/agenda/deletar-agenda.usecase.js";
const deletarAgendaController = async (req, res) => {
    try {
        const adapter = new DeletarAgendaAdapter();
        const usecase = new DeletarAgendaUseCase(adapter);
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
export default deletarAgendaController;
