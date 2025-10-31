import Partida from "../../schemas/partida.js";
class CriarPartidaAdapter {
    async execute(data) {
        const payload = {
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
            const response = await Partida.create(payload);
            const result = {
                id: response._id.toString(),
                competidores: response.competidores.map((c) => String(c)),
                placar_competidor_1: Number(response.placar_competidor_1),
                placar_competidor_2: Number(response.placar_competidor_2),
                vencedor: String(response.vencedor),
                horaInicio: new Date(String(response.horaInicio)),
                horaFim: new Date(String(response.horaFim)),
                dataPartida: new Date(String(response.dataPartida)),
                status: String(response.status)
            };
            return result;
        }
        catch (error) {
            console.log("Erro ao criar a partida:", error);
            throw new Error("Erro ao criar a partida");
        }
    }
}
export default CriarPartidaAdapter;
