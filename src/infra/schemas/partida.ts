import mongoose from 'mongoose';

export const partidaSchema = new mongoose.Schema(
    {
        competidores: [{ type: Array<mongoose.Schema.Types.ObjectId>, ref: 'participante' }],
        placar_competidor_1: { type: Number, required: true },
        placar_competidor_2: { type: Number, required: true },
        vencedor: { type: mongoose.Schema.Types.ObjectId, ref: 'participante' },
        horaInicio: { type: Date, required: true },
        horaFim: { type: Date, required: true },
        dataPartida: { type: Date, required: true },
        status: { type: String, enum:['agendada', 'em_andamento', 'finalizada', 'cancelada'], required: true },
    },
    { 
        timestamps: true 
    }
);

const Partida = mongoose.model('partida', partidaSchema);

export default Partida;