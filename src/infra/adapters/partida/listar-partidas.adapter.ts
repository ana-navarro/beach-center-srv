import Partida from "../../schemas/partida.js";
import { IPartidaResponse } from "./partida.type.js";

class ListarPartidaAdapter {
    async execute(): Promise<IPartidaResponse[]> {
        try {
            const response = await Partida.find();

            const result: IPartidaResponse[] = response.map((response) => ({
                id: response._id.toString(),
                competidores: response.competidores.map((c) => String(c)),
                placar_competidor_1: Number(response.placar_competidor_1),
                placar_competidor_2: Number(response.placar_competidor_2),
                vencedor: String(response.vencedor),
                horaInicio: new Date(String(response.horaInicio)),
                horaFim: new Date(String(response.horaFim)),
                dataPartida: new Date(String(response.dataPartida)),
                status: String(response.status)
            }));

            return result;
        } catch (error) {
            console.log("Erro ao listar a partida:", error);
            throw new Error("Erro ao listar a partida");
        }
    }
}

export default ListarPartidaAdapter;