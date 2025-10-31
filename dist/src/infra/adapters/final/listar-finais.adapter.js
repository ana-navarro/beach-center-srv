import Final from "../../schemas/final.js";
class ListarFinalAdapter {
    async execute() {
        try {
            const response = await Final.find();
            const result = response.map((response) => ({
                id: response._id.toString(),
                etapa: String(response.etapa),
                partida_id: response.partida_id.map((p) => p.toString()),
                vencedores: response.vencedores.map((v) => v.toString()),
            }));
            return result;
        }
        catch (error) {
            console.log("Erro ao atualizar a final:", error);
            throw new Error("Erro ao atualizar a final");
        }
    }
}
export default ListarFinalAdapter;
