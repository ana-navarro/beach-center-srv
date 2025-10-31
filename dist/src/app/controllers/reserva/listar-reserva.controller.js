import ListarReservaUseCase from "../../../domain/usecase/reserva/listar-reserva.usecase.js";
import ListarReservaAdapter from "../../../infra/adapters/reserva/listar-reserva.adapter.js";
const listarReservaController = async (res) => {
    try {
        const adapter = new ListarReservaAdapter();
        const usecase = new ListarReservaUseCase(adapter);
        const response = await usecase.execute();
        return res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default listarReservaController;
