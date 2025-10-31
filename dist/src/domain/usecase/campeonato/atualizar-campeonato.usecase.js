class AtualizarCampeonatoUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute(request) {
        const response = await this.adapter.execute(request);
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
export default AtualizarCampeonatoUseCase;
