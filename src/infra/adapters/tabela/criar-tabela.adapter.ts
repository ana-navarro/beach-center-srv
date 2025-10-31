import Tabela from "../../schemas/tabela.js";
import { ITabelaCelula, ITabelaRequest, ITabelaResponse } from "./tabela.type.js";

class CriarTabelaAdapter {
    celulaMapper(data: ITabelaRequest): ITabelaCelula {
        const payload_celula: ITabelaCelula = {
            pontos: data.celula.pontos,
            jogos: data.celula.jogos,
            vitorias: data.celula.vitorias,
            derrotas: data.celula.derrotas,
            saldo_gols: data.celula.saldo_gols,
        };

        return payload_celula;
    }

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

    async execute(data: ITabelaRequest): Promise<ITabelaResponse> {
        const payload: ITabelaRequest = {
            participante_id: data.participante_id,
            celula: this.celulaMapper(data),
        }

        try {
            const response = await Tabela.create(payload);

            const result: ITabelaResponse = {
                id: response._id.toString(),
                participante_id: String(response.participante_id),
                celula: this.responseCelulaMapper(response)
            }

            return result;
        } catch (error) {
            console.log("Erro ao criar tabela a reserva:", error);
            throw new Error("Erro ao criar tabela a reserva");
        }
    }
}

export default CriarTabelaAdapter;''