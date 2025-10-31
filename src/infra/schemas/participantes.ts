import mongoose from 'mongoose';

export const participanteSchema = new mongoose.Schema(
    {
        evento_id: [{ type: Array<mongoose.Schema.Types.ObjectId>, ref: 'evento' }],
        nome: { type: String, required: true },
        telefone: { type: String, required: true },
        email: { type: String, required: true },
    },
    { 
        timestamps: true 
    }
);

const Participante = mongoose.model('participante', participanteSchema);

export default Participante;