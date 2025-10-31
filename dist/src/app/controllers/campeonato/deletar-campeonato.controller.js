import DeletarCampeonatoUsecase from "../../../domain/usecase/campeonato/deletar-campeonato.usecase.js";
import DeletarCampeonatoAdapter from "../../../infra/adapters/campeonato/deletar-campeonato.adapter.js";
const deletarCampeonatoController = async (req, res) => {
    try {
        const adapter = new DeletarCampeonatoAdapter();
        const usecase = new DeletarCampeonatoUsecase(adapter);
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'O ID do campeonato é obrigatório' });
        }
        const result = await usecase.execute(id);
        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default deletarCampeonatoController;
