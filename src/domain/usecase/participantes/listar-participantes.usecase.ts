import ListarParticipanteAdapter from "../../../infra/adapters/participantes/listar-participantes.adapter.js";
import { IParticipante } from "../../domain/participantes.js";

class ListarParticipanteUseCase {
    constructor(private readonly adapter: ListarParticipanteAdapter) { }

    async execute(): Promise<IParticipante[]> {
        const response = await this.adapter.execute();

        return response.map((response) => ({
            id: response.id,
            evento_id: response.evento_id,
            email: response.email,
            nome: response.nome,
            telefone: response.telefone,
        }));
    }
}

export default ListarParticipanteUseCase;