import mongoose from 'mongoose';
export const repescagemSchema = new mongoose.Schema({
    etapa: { type: String, required: true },
    partida_id: [{ type: (Array), ref: 'partida' }],
    vencedores: [{ type: (Array), ref: 'participante' }],
}, {
    timestamps: true
});
const Repescagem = mongoose.model('repescagem', repescagemSchema);
export default Repescagem;
