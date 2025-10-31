import mongoose from 'mongoose';
export const reservaSchema = new mongoose.Schema({
    agenda_id: { type: mongoose.Schema.Types.ObjectId, ref: 'agenda', required: true },
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    email: { type: String, required: true },
    pago: { type: Boolean, required: true },
    precisa_materias: { type: Boolean, required: true },
    materiais: { type: [String], required: false },
}, {
    timestamps: true
});
const Reserva = mongoose.model('reserva', reservaSchema);
export default Reserva;
