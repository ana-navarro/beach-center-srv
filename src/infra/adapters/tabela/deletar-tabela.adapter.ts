import Tabela from "../../schemas/tabela.js";

class DeletarTabelaAdapter {
    async execute(id: string): Promise<void> {
        try {
            const response = await Tabela.findByIdAndDelete({ _id: id });

            if (!response) {
                throw new Error('Tabela não encontrada');
            };
        } catch (error) {
            console.log("Erro ao deletar tabela a reserva:", error);
            throw new Error("Erro ao deletar tabela a reserva");
        }
    }
}

export default DeletarTabelaAdapter;