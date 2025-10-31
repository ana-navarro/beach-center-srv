class VisualizarCampeonatoUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute(id) {
        const response = await this.adapter.execute(id);
        return {
            id: response.id,
            titulo: response.titulo,
            esporte: response.esporte,
            descricao: response.descricao || '',
            dataInicio: response.dataInicio,
            dataFim: response.dataFim,
            status: response.status,
        };
    }
}
export default VisualizarCampeonatoUseCase;
