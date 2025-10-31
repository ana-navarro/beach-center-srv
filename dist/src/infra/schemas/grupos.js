import mongoose from 'mongoose';
export const grupoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    participantes_id: [{ type: (Array), ref: 'participante' }],
    tabelas_ids: [{ type: (Array), ref: 'tabela' }],
}, {
    timestamps: true
});
const Grupo = mongoose.model('grupo', grupoSchema);
export default Grupo;
