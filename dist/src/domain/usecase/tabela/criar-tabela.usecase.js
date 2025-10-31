class CriarTabelaUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute(data) {
        const response = await this.adapter.execute(data);
        return {
            id: response.id,
            participante_id: response.participante_id,
            celula: response.celula,
        };
    }
}
export default CriarTabelaUseCase;
