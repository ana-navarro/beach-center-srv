import Campeonato from "../../schemas/campeonato.js";
import { ICampeonatoResponse, Status } from "./campeonato.type.js";

class VisualizarCampeonatoAdapter {
    statusMapper(status: string): Status {
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

    async execute(id: string): Promise<ICampeonatoResponse> {
        try {
            const response = await Campeonato.findById(id);

            if (!response) {
                throw new Error("Agenda não encontrada");
            }

            const result: ICampeonatoResponse = {
                id: response._id.toString(),
                titulo: response.titulo,
                esporte: response.esporte,
                descricao: response.descricao ?? null,
                dataInicio: response.dataInicio,
                dataFim: response.dataFim,
                status: this.statusMapper(response.status),
            };

            return result;
        } catch (error) {
            console.log("Erro ao visualizar a agenda:", error);
            throw new Error("Erro ao visualizar a agenda");
        }
    }
}

export default VisualizarCampeonatoAdapter;