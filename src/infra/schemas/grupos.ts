import mongoose from 'mongoose';

export const grupoSchema = new mongoose.Schema(
    {
        titulo: { type: String, required: true },
        participantes_id: [{ type: Array<mongoose.Schema.Types.ObjectId>, ref: 'participante'}],
        tabelas_ids: [{ type: Array<mongoose.Schema.Types.ObjectId>, ref: 'tabela'}],
    },
    { 
        timestamps: true 
    }
);

const Grupo = mongoose.model('grupo', grupoSchema);

export default Grupo;