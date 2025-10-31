class VisualizarParticipanteUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute(id) {
        const response = await this.adapter.execute(id);
        return {
            id: response.id,
            evento_id: response.evento_id,
            email: response.email,
            nome: response.nome,
            telefone: response.telefone,
        };
    }
}
export default VisualizarParticipanteUseCase;
