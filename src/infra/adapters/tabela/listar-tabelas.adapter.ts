import Tabela from "../../schemas/tabela.js";
import { ITabelaCelula, ITabelaResponse } from "./tabela.type.js";

class ListarTabelaAdapter {
    responseCelulaMapper(response: any): ITabelaCelula {
        const payload_celula: ITabelaCelula = {
            pontos: Number(response.celula.pontos),
            jogos: Number(response.celula.jogos),
            vitorias: Number(response.celula.vitorias),
            derrotas: Number(response.celula.derrotas),
            saldo_gols: Number(response.celula.saldo_gols),
        };

        return payload_celula;
    }

    async execute(): Promise<ITabelaResponse[]> {
        try {
            const response = await Tabela.find();

            const result: ITabelaResponse[] = response.map((response) => ({
                id: response._id.toString(),
                participante_id: String(response.participante_id),
                celula: this.responseCelulaMapper(response)
            }));

            return result;
        } catch (error) {
            console.log("Erro ao listar tabela a reserva:", error);
            throw new Error("Erro ao listar tabela a reserva");
        }
    }
}

export default ListarTabelaAdapter;