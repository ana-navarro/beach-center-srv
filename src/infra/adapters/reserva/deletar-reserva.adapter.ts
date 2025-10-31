import Reserva from "../../schemas/reserva.js";

class DeletarReservaAdapter {
    async execute(id: string): Promise<void> {
        try {
            const response = await Reserva.findByIdAndDelete({_id: id});

            if (!response) {
                throw new Error('Partida não encontrada!');
            };
        } catch (error) {
            console.log("Erro ao deletar a reserva:", error);
            throw new Error("Erro ao deletar a reserva");
        }
    }
}

export default DeletarReservaAdapter;