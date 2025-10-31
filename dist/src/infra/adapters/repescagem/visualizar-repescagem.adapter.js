import Repescagem from "../../schemas/repescagem.js";
class VisualizarRepescagemAdapter {
    async execute(id) {
        try {
            const response = await Repescagem.findById({ _id: id });
            if (!response) {
                throw new Error('Repescagem não encontrada');
            }
            ;
            const result = {
                id: response._id.toString(),
                etapa: String(response.etapa),
                partida_id: response.partida_id.map((p) => p.toString()),
                vencedores: response.vencedores.map((v) => v.toString()),
            };
            return result;
        }
        catch (error) {
            console.log("Erro ao deletar a Repescagem:", error);
            throw new Error("Erro ao deletar a Repescagem");
        }
    }
}
export default VisualizarRepescagemAdapter;
