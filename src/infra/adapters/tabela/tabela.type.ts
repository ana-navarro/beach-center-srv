export interface ITabelaCelula {
    pontos: number;
    jogos: number;
    vitorias: number;
    derrotas: number;
    saldo_gols: number;
}

export interface ITabelaRequest {
    participante_id: string;
    celula: ITabelaCelula;
}

export interface ITabelaResponse {
    id: string;
    participante_id: string;
    celula: ITabelaCelula;
}