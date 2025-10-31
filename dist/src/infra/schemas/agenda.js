import mongoose from 'mongoose';
export const agendaSchema = new mongoose.Schema({
    dia: { type: Date, required: true },
    horarioInicio: { type: String, required: true },
    horaFim: { type: String, required: true },
    local: { type: String, required: true },
    quadra: { type: String, required: true },
    disponivel: { type: Boolean, required: true },
}, {
    timestamps: true
});
const Agenda = mongoose.model('agenda', agendaSchema);
export default Agenda;
