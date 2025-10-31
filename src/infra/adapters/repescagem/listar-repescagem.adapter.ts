import Repescagem from "../../schemas/repescagem.js";
import { IRepescagemResponse } from "./repescagem.type.js";

class ListarRepescagemAdapter {
    async execute(): Promise<IRepescagemResponse[]> {
        try {
            const response = await Repescagem.find();

            const result: IRepescagemResponse[] = response.map((response) => ({
                id: response._id.toString(),
                etapa: String(response.etapa),
                partida_id: response.partida_id.map((p) => p.toString()),
                vencedores: response.vencedores.map((v) => v.toString()),
            }));

            return result;
        } catch (error) {
            console.log("Erro ao atualizar a Repescagem:", error);
            throw new Error("Erro ao atualizar a Repescagem");
        }
    }
}

export default ListarRepescagemAdapter;