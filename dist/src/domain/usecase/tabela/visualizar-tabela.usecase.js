class VisualizarTabelaUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute(id) {
        const response = await this.adapter.execute(id);
        return {
            id: response.id,
            participante_id: response.participante_id,
            celula: response.celula,
        };
    }
}
export default VisualizarTabelaUseCase;
