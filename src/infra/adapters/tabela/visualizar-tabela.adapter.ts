import Tabela from "../../schemas/tabela.js";
import { ITabelaCelula, ITabelaResponse } from "./tabela.type.js";

class VisualizarTabelaAdapter {
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

    async execute(id: string): Promise<ITabelaResponse> {
        try {
            const response = await Tabela.findById({ _id: id });

            if (!response) {
                throw new Error('Tabela não encontrada');
            };

            const result: ITabelaResponse = {
                id: response._id.toString(),
                participante_id: String(response.participante_id),
                celula: this.responseCelulaMapper(response)
            }

            return result;
        } catch (error) {
            console.log("Erro ao visualizar tabela a reserva:", error);
            throw new Error("Erro ao visualizar tabela a reserva");
        }
    }
}

export default VisualizarTabelaAdapter;