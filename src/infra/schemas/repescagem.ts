import mongoose from 'mongoose';

export const repescagemSchema = new mongoose.Schema(
    {
        etapa: { type: String, required: true },
        partida_id: [{ type: Array<mongoose.Schema.Types.ObjectId>, ref: 'partida' }],
        vencedores: [{ type: Array<mongoose.Schema.Types.ObjectId>, ref: 'participante' }],
    },
    { 
        timestamps: true 
    }
);

const Repescagem = mongoose.model('repescagem', repescagemSchema);

export default Repescagem;