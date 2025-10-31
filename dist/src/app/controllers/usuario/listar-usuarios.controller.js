import ListarUsuarioUseCase from "../../../domain/usecase/usuario/listar-usuarios.usecase.js";
import ListarUsuarioAdapter from "../../../infra/adapters/usuario/listar-usuarios.adapter.js";
const listarUsuarioController = async (res) => {
    try {
        const adapter = new ListarUsuarioAdapter();
        const usecase = new ListarUsuarioUseCase(adapter);
        const response = await usecase.execute();
        return res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default listarUsuarioController;
