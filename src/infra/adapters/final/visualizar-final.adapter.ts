import Final from "../../schemas/final.js";
import { IFinalResponse } from "./final.type.js";

class VisualizarFinalAdapter {
    async execute(id: string): Promise<IFinalResponse> {
        try {
            const response = await Final.findById({ _id: id });

            if (!response) {
                throw new Error('Final não encontrada');
            };

            const result: IFinalResponse = {
                id: response._id.toString(),
                etapa: String(response.etapa),
                partida_id: response.partida_id.map((p) => p.toString()),
                vencedores: response.vencedores.map((v) => v.toString()),
            };

            return result;
        } catch (error) {
            console.log("Erro ao deletar a final:", error);
            throw new Error("Erro ao deletar a final");
        }
    }
}

export default VisualizarFinalAdapter;