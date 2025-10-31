class AtualizarTabelaUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute({ id, data }) {
        const response = await this.adapter.execute({ id, data });
        return {
            id: response.id,
            participante_id: response.participante_id,
            celula: response.celula,
        };
    }
}
export default AtualizarTabelaUseCase;
