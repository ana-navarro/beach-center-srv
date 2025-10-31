import Campeonato from "../../schemas/campeonato.js";
import { ICampeonatoResponse } from "./campeonato.type.js";

class ListarCampeonatosAdapter {
    schemaToResponse(item: any): ICampeonatoResponse {
        return {
            id: item._id.toString(),
            titulo: item.titulo,
            esporte: item.esporte,
            descricao: item.descricao ?? null,
            dataInicio: item.dataInicio,
            dataFim: item.dataFim,
            status: item.status,
        };
    }

    async execute(): Promise<ICampeonatoResponse[]> {
        try {
            const list = await Campeonato.find();

            return list.map(this.schemaToResponse);
        } catch (error) {
            console.log("Erro ao listar os campeonatos:", error);
            throw new Error("Erro ao listar os campeonatos");
        }
    }
}

export default ListarCampeonatosAdapter;