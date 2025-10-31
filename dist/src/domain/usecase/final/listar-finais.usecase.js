class ListarFinalUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute() {
        const response = await this.adapter.execute();
        return response.map((r) => ({
            id: r.id,
            etapa: r.etapa,
            partida_id: r.partida_id,
            vencedores: r.vencedores,
        }));
    }
}
export default ListarFinalUseCase;
