export interface IRepescagemRequest {
    etapa: string;
    partida_id: string[];
    vencedores: string[];
}

export interface IRepescagemResponse {
    id: string;
    etapa: string;
    partida_id: string[];
    vencedores: string[];
}