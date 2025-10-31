import mongoose from 'mongoose';
export const campeonatoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    esporte: { type: String, required: true },
    descricao: { type: String },
    dataInicio: { type: Date, required: true },
    dataFim: { type: Date, required: true },
    status: { type: String, enum: ['aberto', 'finalizado', 'em_andamento', 'draft', 'cancelado', 'pausado'], required: true },
}, {
    timestamps: true
});
const Campeonato = mongoose.model('campeonato', campeonatoSchema);
export default Campeonato;
