class AtualizarFinalUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute({ id, data }) {
        const response = await this.adapter.execute({ id, data });
        return {
            id: response.id,
            etapa: response.etapa,
            partida_id: response.partida_id,
            vencedores: response.vencedores,
        };
    }
}
export default AtualizarFinalUseCase;
