import CriarParticipanteAdapter from "../../../infra/adapters/participantes/criar-participante.adapter.js";
import { IParticipante } from "../../domain/participantes.js";
import { IParticipanteRequest } from "./participante.types.js";

class CriarParticipanteUseCase {
    constructor(private readonly adapter: CriarParticipanteAdapter) { }

    async execute(data: IParticipanteRequest): Promise<IParticipante> {
        const response = await this.adapter.execute(data);

        return {
            id: response.id,
            evento_id: response.evento_id,
            email: response.email,
            nome: response.nome,
            telefone: response.telefone,
        };
    }
}

export default CriarParticipanteUseCase;