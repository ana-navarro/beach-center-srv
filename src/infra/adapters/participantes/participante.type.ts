export interface IParticipanteRequest {
    evento_id: string[];
    nome: string;
    telefone: string;
    email: string;
}

export interface IParticipanteResponse {
    id: string;
    evento_id: string[];
    nome: string;
    telefone: string;
    email: string;
}