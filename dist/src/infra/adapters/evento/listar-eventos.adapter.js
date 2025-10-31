import Evento from "../../schemas/evento.js";
import { StatusEvento } from "./evento.type.js";
class ListarEventosAdapter {
    statusMapper(status) {
        switch (status) {
            case 'aberto':
                return StatusEvento.ABERTO;
            case 'finalizado':
                return StatusEvento.FINALIZADO;
            case 'em_andamento':
                return StatusEvento.EM_ANDAMENTO;
            case 'draft':
                return StatusEvento.DRAFT;
            case 'cancelado':
                return StatusEvento.CANCELADO;
            case 'pausado':
                return StatusEvento.PAUSADO;
            default:
                throw new Error("Status inválido");
        }
    }
    eventoTipoMapper(data) {
        let result;
        if (typeof data !== 'object' || data === null || !('tipo' in data)) {
            throw new Error("Tipo de participante inválido");
        }
        const d = data;
        if (d.tipo === 'individual') {
            result = {
                tipo: 'individual',
                participante_id: d.participante_id,
            };
        }
        else if (d.tipo === 'dupla') {
            result = {
                tipo: 'dupla',
                participante1_id: d.participante1_id,
                participante2_id: d.participante2_id,
            };
        }
        else if (d.tipo === 'time') {
            result = {
                tipo: 'time',
                nome_time: d.nome_time,
                membros_id: d.membros_id,
            };
        }
        if (!result || (result.tipo !== 'individual' && result.tipo !== 'dupla' && result.tipo !== 'time')) {
            throw new Error("Tipo de participante inválido");
        }
        return result;
    }
    async execute() {
        try {
            const response = await Evento.find();
            const result = response.map((data) => {
                return {
                    id: data._id.toString(),
                    titulo: String(data.titulo),
                    vagas: Number(data.vagas),
                    evento_tipo: this.eventoTipoMapper(data.evento_tipo),
                    campeonato_id: String(data.campeonato_id),
                    repescagem_id: data.repescagem_id ? data.repescagem_id.map((r) => String(r)) : null,
                    status: this.statusMapper(data.status),
                    grupo_id: data.grupo_id ? data.grupo_id.map((g) => String(g)) : null,
                    final_id: data.final_id ? data.final_id.map((f) => String(f)) : null,
                    vencedor_id: data.vencedor_id ? String(data.vencedor_id) : null,
                };
            });
            return result;
        }
        catch (error) {
            console.log("Erro ao listar o evento:", error);
            throw new Error("Erro ao listar o evento");
        }
    }
}
export default ListarEventosAdapter;
