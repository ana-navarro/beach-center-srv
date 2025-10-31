class VisualizarUsuarioUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute(id) {
        const response = await this.adapter.execute(id);
        return {
            id: response.id,
            email: response.email,
            nome: response.nome,
            telefone: response.telefone,
            tipo: response.tipo,
        };
    }
}
export default VisualizarUsuarioUseCase;
