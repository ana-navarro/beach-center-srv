import ListarPartidaUseCase from "../../../domain/usecase/partida/listar-partidas.usecase.js";
import ListarPartidaAdapter from "../../../infra/adapters/partida/listar-partidas.adapter.js";
const listarPartidaController = async (res) => {
    try {
        const adapter = new ListarPartidaAdapter();
        const usecase = new ListarPartidaUseCase(adapter);
        const response = await usecase.execute();
        return res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default listarPartidaController;
