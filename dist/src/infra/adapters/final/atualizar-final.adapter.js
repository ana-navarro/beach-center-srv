import Final from "../../schemas/final.js";
class AtualizarFinalAdapter {
    async execute({ id, data }) {
        const payload = {
            etapa: data.etapa,
            partida_id: data.partida_id,
            vencedores: data.vencedores
        };
        try {
            const response = await Final.findByIdAndUpdate({ _id: id }, payload);
            if (!response) {
                throw new Error('Final não encontrada');
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
            console.log("Erro ao atualizar a final:", error);
            throw new Error("Erro ao atualizar a final");
        }
    }
}
export default AtualizarFinalAdapter;
