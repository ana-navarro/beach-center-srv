export interface ITabelaCelula {
    pontos: number;
    jogos: number;
    vitorias: number;
    derrotas: number;
    saldo_gols: number;
}

export interface ITabela {
    id: string;
    participante_id: string;
    celula: ITabelaCelula;
}