export interface IGrupoRequest {
    titulo: string;
    participantes_id: string[];
    tabelas_ids: string[];
}

export interface IGrupoResponse {
    id: string;
    titulo: string;
    participantes_id: string[];
    tabelas_ids: string[];
}