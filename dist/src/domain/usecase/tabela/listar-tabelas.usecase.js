class ListarTabelaUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute() {
        const response = await this.adapter.execute();
        return response.map((response) => ({
            id: response.id,
            participante_id: response.participante_id,
            celula: response.celula,
        }));
    }
}
export default ListarTabelaUseCase;
