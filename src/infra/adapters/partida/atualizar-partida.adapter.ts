import Partida from "../../schemas/partida.js";
import { IPartidaRequest, IPartidaResponse } from "./partida.type.js";

interface IAtualizarPartidaAdapter {
    id: string,
    data: IPartidaRequest;
}

class AtualizarPartidaAdapter {
    async execute({ id, data }: IAtualizarPartidaAdapter): Promise<IPartidaResponse> {
        const payload: IPartidaRequest = {
            competidores: data.competidores,
            placar_competidor_1: data.placar_competidor_1,
            placar_competidor_2: data.placar_competidor_2,
            vencedor: data.vencedor,
            horaInicio: data.horaInicio,
            horaFim: data.horaFim,
            dataPartida: data.dataPartida,
            status: data.status,
        };

        try {
            const response = await Partida.findByIdAndUpdate({ _id: id }, payload);

            if (!response) {
                throw new Error("Partida não encontrada!");
            };

            const result: IPartidaResponse = {
                id: response._id.toString(),
                competidores: response.competidores.map((c) => String(c)),
                placar_competidor_1: Number(response.placar_competidor_1),
                placar_competidor_2: Number(response.placar_competidor_2),
                vencedor: String(response.vencedor),
                horaInicio: new Date(String(response.horaInicio)),
                horaFim: new Date(String(response.horaFim)),
                dataPartida: new Date(String(response.dataPartida)),
                status: String(response.status)
            }

            return result;
        } catch (error) {
            console.log("Erro ao atualizar a partida:", error);
            throw new Error("Erro ao atualizar a partida");
        }
    }
}

export default AtualizarPartidaAdapter;