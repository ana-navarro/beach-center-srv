import Repescagem from "../../schemas/repescagem.js";
import { IRepescagemRequest, IRepescagemResponse } from "./repescagem.type.js";

class CriarRepescagemAdapter {
    async execute(data: IRepescagemRequest): Promise<IRepescagemResponse> {
        const payload: IRepescagemRequest = {
            etapa: data.etapa,
            partida_id: data.partida_id,
            vencedores: data.vencedores
        };

        try {
            const response = await Repescagem.create(payload);

            const result: IRepescagemResponse = {
                id: response._id.toString(),
                etapa: String(response.etapa),
                partida_id: response.partida_id.map((p) => p.toString()),
                vencedores: response.vencedores.map((v) => v.toString()),
            };

            return result;
        } catch (error) {
            console.log("Erro ao criar a repescagem:", error);
            throw new Error("Erro ao criar a repescagem");
        }
    }
}

export default CriarRepescagemAdapter;