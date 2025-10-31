import Final from "../../schemas/final.js";

class DeletarFinalAdapter {
    async execute(id: string) {
        try {
            const response = await Final.findByIdAndDelete({ _id: id });

            if (!response) {
                throw new Error('Final não encontrada');
            };
        } catch (error) {
            console.log("Erro ao deletar a final:", error);
            throw new Error("Erro ao deletar a final");
        }
    }
}

export default DeletarFinalAdapter;