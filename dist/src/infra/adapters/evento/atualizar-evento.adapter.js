import Evento from "../../schemas/evento.js";
import { StatusEvento } from "./evento.type.js";
class AtualizarEventoAdapter {
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
    async execute({ id, data }) {
        const payload = {
            titulo: data.titulo,
            vagas: data.vagas,
            evento_tipo: this.eventoTipoMapper(data.evento_tipo),
            campeonato_id: data.campeonato_id,
            grupo_id: data.grupo_id || null,
            final_id: data.final_id || null,
            repescagem_id: data.repescagem_id || null,
            status: data.status,
            vencedor_id: data.vencedor_id || null,
        };
        try {
            const response = await Evento.findOneAndUpdate({ _id: id }, payload);
            if (!response) {
                throw new Error("Evento não encontrado");
            }
            const result = {
                id: response._id.toString(),
                titulo: String(response.titulo),
                vagas: Number(response.vagas),
                evento_tipo: this.eventoTipoMapper(response.evento_tipo),
                campeonato_id: String(response.campeonato_id),
                repescagem_id: response.repescagem_id ? response.repescagem_id.map((r) => String(r)) : null,
                status: this.statusMapper(response.status),
                grupo_id: response.grupo_id ? response.grupo_id.map((g) => String(g)) : null,
                final_id: response.final_id ? response.final_id.map((f) => String(f)) : null,
                vencedor_id: response.vencedor_id ? String(response.vencedor_id) : null,
            };
            return result;
        }
        catch (error) {
            console.log("Erro ao atualizar o evento:", error);
            throw new Error("Erro ao atualizar o evento");
        }
    }
}
export default AtualizarEventoAdapter;
