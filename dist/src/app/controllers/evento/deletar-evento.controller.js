import DeletarEventoUseCase from "../../../domain/usecase/evento/deletar-evento.usecase.js";
import DeletarEventoAdapter from "../../../infra/adapters/evento/deletar-evento.adapter.js";
const deletarEventoController = async (req, res) => {
    try {
        const adapter = new DeletarEventoAdapter();
        const usecase = new DeletarEventoUseCase(adapter);
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'O ID do evento é obrigatório' });
        }
        const result = await usecase.execute(id);
        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default deletarEventoController;
