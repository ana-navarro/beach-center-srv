export interface IFinalRequest {
    etapa: string;
    partida_id: string[];
    vencedores: string[];
}

export interface IFinalResponse {
    id: string;
    etapa: string;
    partida_id: string[];
    vencedores: string[];
}