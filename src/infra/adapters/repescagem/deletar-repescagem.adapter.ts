import Repescagem from "../../schemas/repescagem.js";

class DeletarRepescagemAdapter {
    async execute(id: string) {
        try {
            const response = await Repescagem.findByIdAndDelete({ _id: id });

            if (!response) {
                throw new Error('Repescagem não encontrada');
            };
        } catch (error) {
            console.log("Erro ao deletar a Repescagem:", error);
            throw new Error("Erro ao deletar a Repescagem");
        }
    }
}

export default DeletarRepescagemAdapter;