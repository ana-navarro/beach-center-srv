import Final from "../../schemas/final.js";
import { IFinalRequest, IFinalResponse } from "./final.type.js";

class CriarFinalAdapter {
    async execute(data: IFinalRequest): Promise<IFinalResponse> {
        const payload: IFinalRequest = {
            etapa: data.etapa,
            partida_id: data.partida_id,
            vencedores: data.vencedores
        };

        try {
            const response = await Final.create(payload);

            const result: IFinalResponse = {
                id: response._id.toString(),
                etapa: String(response.etapa),
                partida_id: response.partida_id.map((p) => p.toString()),
                vencedores: response.vencedores.map((v) => v.toString()),
            };

            return result;
        } catch (error) {
            console.log("Erro ao criar a final:", error);
            throw new Error("Erro ao criar a final");
        }
    }
}

export default CriarFinalAdapter;