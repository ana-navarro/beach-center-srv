import mongoose from 'mongoose';

export const participanteEventoSchema = new mongoose.Schema(
    {
        tipo: { type: String, default: 'individual' },
        participante_id: { type: mongoose.Schema.Types.ObjectId, ref: 'participante', required: true },
    },
    { 
        timestamps: true 
    }
);

export const participanteDuplaEventoSchema = new mongoose.Schema(
    {
        tipo: { type: String, default: 'dupla' },
        participante1_id: { type: mongoose.Schema.Types.ObjectId, ref: 'participante', required: true },
        participante2_id: { type: mongoose.Schema.Types.ObjectId, ref: 'participante', required: true },
    },
    {
        timestamps: true
    },
);

export const participanteTimeEventoSchema = new mongoose.Schema(
    {
        tipo: { type: String, default: 'time' },
        nome_time: { type: String, required: true },
        membros_id: [{ type: Array<mongoose.Schema.Types.ObjectId>, ref: 'participante', required: true }],
    },
    {
        timestamps: true
    }
);

export const eventoSchema = new mongoose.Schema(
    {
        titulo: { type: String, required: true },
        vagas: { type: Number, required: true },
        campeonato_id: { type: mongoose.Schema.Types.ObjectId, ref: 'campeonato', required: true },
        grupo_id: [{ type: Array<mongoose.Schema.Types.ObjectId>, ref: 'grupo', required: true }],
        final_id: [{ type: Array<mongoose.Schema.Types.ObjectId>, ref: 'final', required: true }],
        repescagem_id: [{ type: Array<mongoose.Schema.Types.ObjectId>, ref: 'repescagem'}],
        evento_tipo: { 
            type: participanteTimeEventoSchema || participanteDuplaEventoSchema || participanteEventoSchema, 
            required: true 
        },
        status: { type: String, enum:['aberto', 'finalizado', 'em_andamento', 'draft', 'cancelado', 'pausado'], required: true },
        vencedor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'participante' },
    },
    { 
        timestamps: true 
    }
);

const Evento = mongoose.model('evento', eventoSchema);

export default Evento;