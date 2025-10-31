import VisualizarPartidaAdapter from "../../../infra/adapters/partida/visualizar-partida.adapter.js";
import { IPartida } from "../../domain/partida.js";

class VisualizarPartidaUseCase {
    constructor (private readonly adapter: VisualizarPartidaAdapter) {}

    statusMapper(status: string): 'agendada' | 'em_andamento' | 'finalizada' | 'cancelada' {
            if (status === 'agendada') {
                return 'agendada';
            };
    
            if (status === 'em_andamento') {
                return 'em_andamento';
            };
    
            if (status === 'finalizada') {
                return 'finalizada';
            }
    
            return 'cancelada';
        }
    
        async execute(id: string): Promise<IPartida> {
            const response = await this.adapter.execute(id);
    
            return {
                id: response.id,
                competidores: response.competidores,
                dataPartida: response.dataPartida,
                horaFim: response.horaFim,
                horaInicio: response.horaInicio,
                placar_competidor_1: response.placar_competidor_1,
                placar_competidor_2: response.placar_competidor_2,
                status: this.statusMapper(response.status),
                vencedor: response.vencedor,
            };
        }
}

export default VisualizarPartidaUseCase;