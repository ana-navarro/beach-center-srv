import Campeonato from "../../schemas/campeonato.js";
import { Status } from "./campeonato.type.js";
class AtualizarCampeonatoAdapter {
    statusMapper(status) {
        switch (status) {
            case 'aberto':
                return Status.ABERTO;
            case 'finalizado':
                return Status.FINALIZADO;
            case 'em_andamento':
                return Status.EM_ANDAMENTO;
            case 'draft':
                return Status.DRAFT;
            case 'cancelado':
                return Status.CANCELADO;
            case 'pausado':
                return Status.PAUSADO;
            default:
                throw new Error("Status inválido");
        }
    }
    async execute({ id, data }) {
        const payload = {
            titulo: data.titulo,
            esporte: data.esporte,
            descricao: data.descricao,
            dataInicio: data.dataInicio,
            dataFim: data.dataFim,
            status: data.status,
        };
        try {
            const response = await Campeonato.findOneAndUpdate({ _id: id }, payload);
            if (!response) {
                throw new Error("Campeonato não encontrado");
            }
            const result = {
                id: response._id.toString(),
                titulo: response.titulo,
                esporte: response.esporte,
                descricao: response.descricao || null,
                dataInicio: response.dataInicio,
                dataFim: response.dataFim,
                status: this.statusMapper(response.status),
            };
            return result;
        }
        catch (error) {
            console.log("Erro ao atualizar o campeonato:", error);
            throw new Error("Erro ao atualizar o campeonato");
        }
    }
}
export default AtualizarCampeonatoAdapter;
