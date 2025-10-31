import VisualizarParticipanteAdapter from "../../../infra/adapters/participantes/visualizar-participante.adapter.js";
import { IParticipante } from "../../domain/participantes.js";

class VisualizarParticipanteUseCase {
    constructor(private readonly adapter: VisualizarParticipanteAdapter) { }

    async execute(id: string): Promise<IParticipante> {
        const response = await this.adapter.execute(id);

        return {
            id: response.id,
            evento_id: response.evento_id,
            email: response.email,
            nome: response.nome,
            telefone: response.telefone,
        };
    }
}

export default VisualizarParticipanteUseCase;