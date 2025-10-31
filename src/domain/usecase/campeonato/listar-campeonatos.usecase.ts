import ListarCampeonatosAdapter from "../../../infra/adapters/campeonato/listar-campeonatos.adapter.js";
import { ICampeonatoResponse } from "./campeonato.type.js";

class ListarCampeonatosUseCase {
    constructor(private adapter: ListarCampeonatosAdapter) {}

    async execute(): Promise<ICampeonatoResponse[]> {
        const response = await this.adapter.execute();
        return response.map((campeonato) => ({
            id: campeonato.id,
            titulo: campeonato.titulo,
            esporte: campeonato.esporte,
            descricao: campeonato.descricao || '',
            dataInicio: campeonato.dataInicio,
            dataFim: campeonato.dataFim,
            status: campeonato.status,
        }));
    }
}

export default ListarCampeonatosUseCase;