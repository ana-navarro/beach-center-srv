import mongoose from 'mongoose';
export const finalSchema = new mongoose.Schema({
    etapa: { type: String, required: true },
    partida_id: [{ type: (Array), ref: 'partida' }],
    vencedores: [{ type: (Array), ref: 'participante' }],
}, {
    timestamps: true
});
const Final = mongoose.model('final', finalSchema);
export default Final;
