import AtualizarParticipanteAdapter from "../../../infra/adapters/participantes/atualizar-participante.adapter.js";
import { IParticipante } from "../../domain/participantes.js";
import { IParticipanteRequest } from "./participante.types.js";

interface IAtualizarParticipanteUseCase {
    id: string;
    data: IParticipanteRequest;
}

class AtualizarParticipanteUseCase {
    constructor (private readonly adapter: AtualizarParticipanteAdapter) {}

    async execute({ id, data }: IAtualizarParticipanteUseCase): Promise<IParticipante> {
        const response = await this.adapter.execute({ id, data });

        return {
            id: response.id,
            evento_id: response.evento_id,
            email: response.email,
            nome: response.nome,
            telefone: response.telefone,
        };
    }
}

export default AtualizarParticipanteUseCase;