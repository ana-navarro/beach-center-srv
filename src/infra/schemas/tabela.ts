import mongoose from 'mongoose';

export const tabela_celulaSchema = new mongoose.Schema(
    {   
        pontos: { type: Number, required: true },
        jogos: { type: Number, required: true },
        vitorias: { type: Number, required: true },
        derrotas: { type: Number, required: true },
        saldo_gols: { type: Number, required: true },
    },
    { 
        timestamps: true 
    }
);

export const tabelaSchema = new mongoose.Schema(
    {
        participante_id: { type: mongoose.Schema.Types.ObjectId, ref: 'participante', required: true },
        celula: { type: tabela_celulaSchema, required: true },
    },
    { 
        timestamps: true 
    }
);

const Tabela = mongoose.model('tabela', tabelaSchema);

export default Tabela;