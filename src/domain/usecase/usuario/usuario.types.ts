export interface IUsuarioRequest {
    nome: string;
    telefone: string;
    email: string;
    password: string;
    tipo: 'administrador' | 'cliente' | 'professor';
}

export interface IUsuarioResponse {
    id: string;
    nome: string;
    telefone: string;
    email: string;
    tipo: 'administrador' | 'cliente' | 'professor';
}