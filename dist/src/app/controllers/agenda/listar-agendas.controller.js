import ListarAgendaUseCase from "../../../domain/usecase/agenda/listar-agendas.usecase.js";
import ListarAgendasAdapter from "../../../infra/adapters/agenda/listar-agendas.adapter.js";
const listarAgendasController = async (res) => {
    try {
        const adapter = new ListarAgendasAdapter();
        const usecase = new ListarAgendaUseCase(adapter);
        const result = await usecase.execute();
        return res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default listarAgendasController;
