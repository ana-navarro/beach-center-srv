class AtualizarUsuarioUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute({ id, data }) {
        const response = await this.adapter.execute({ id, data });
        return {
            id: response.id,
            email: response.email,
            nome: response.nome,
            telefone: response.telefone,
            tipo: response.tipo,
        };
    }
}
export default AtualizarUsuarioUseCase;
