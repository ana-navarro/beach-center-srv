import Final from "../../schemas/final.js";
import { IFinalRequest, IFinalResponse } from "./final.type.js";

interface IAtualizarFinalAdapter {
    id: string;
    data: IFinalRequest;
}

class AtualizarFinalAdapter {
    async execute({ id, data }: IAtualizarFinalAdapter): Promise<IFinalResponse> { 
        const payload: IFinalRequest = {
            etapa: data.etapa,
            partida_id: data.partida_id,
            vencedores: data.vencedores
        };

        try {
            const response = await Final.findByIdAndUpdate({ _id: id }, payload);

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
            console.log("Erro ao atualizar a final:", error);
			throw new Error("Erro ao atualizar a final");
        }
    }
}

export default AtualizarFinalAdapter;