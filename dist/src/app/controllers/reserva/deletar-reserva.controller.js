import DeletarReservaUseCase from "../../../domain/usecase/reserva/deletar-reserva.usecase.js";
import DeletarReservaAdapter from "../../../infra/adapters/reserva/deletar-reserva.adapter.js";
const deletarReservaController = async (req, res) => {
    try {
        const adapter = new DeletarReservaAdapter();
        const usecase = new DeletarReservaUseCase(adapter);
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'O ID da reserva é obrigatório' });
        }
        await usecase.execute(id);
        return res.status(200).json({ message: 'Reserva deletada com sucesso!' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
export default deletarReservaController;
