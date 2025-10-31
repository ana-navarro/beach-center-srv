export interface IUsuario {
    id: string;
    nome: string;
    telefone: string;
    email: string;
    password: string;
    tipo: 'administrador' | 'cliente' | 'professor';
}