import ListarGrupoUseCase from "../../../domain/usecase/grupos/listar-grupos.usecase.js";
import ListarGrupoAdapter from "../../../infra/adapters/grupos/listar-grupos.adapter.js";
const listarGrupoController = async (res) => {
    try {
        const adapter = new ListarGrupoAdapter();
        const usecase = new ListarGrupoUseCase(adapter);
        const response = await usecase.execute();
        return res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default listarGrupoController;
