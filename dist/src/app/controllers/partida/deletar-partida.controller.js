import DeletarPartidaUseCase from "../../../domain/usecase/partida/deletar-partida.usecase.js";
import DeletarPartidaAdapter from "../../../infra/adapters/partida/deletar-partida.adapter.js";
const deletarPartidaController = async (req, res) => {
    try {
        const adapter = new DeletarPartidaAdapter();
        const usecase = new DeletarPartidaUseCase(adapter);
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'O ID da partida é obrigatório' });
        }
        await usecase.execute(id);
        return res.status(200).json({ message: 'Partida deletada com sucesso!' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default deletarPartidaController;
