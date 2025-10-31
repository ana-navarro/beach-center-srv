import ListarCampeonatosUseCase from "../../../domain/usecase/campeonato/listar-campeonatos.usecase.js";
import ListarCampeonatosAdapter from "../../../infra/adapters/campeonato/listar-campeonatos.adapter.js";
const listarCampeonatoController = async (res) => {
    try {
        const adapter = new ListarCampeonatosAdapter();
        const usecase = new ListarCampeonatosUseCase(adapter);
        const result = await usecase.execute();
        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default listarCampeonatoController;
