class CriarRepescagemUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute(data) {
        const response = await this.adapter.execute(data);
        return {
            id: response.id,
            etapa: response.etapa,
            partida_id: response.partida_id,
            vencedores: response.vencedores,
        };
    }
}
export default CriarRepescagemUseCase;
