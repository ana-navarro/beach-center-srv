class CriarEventoUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute(data) {
        const response = await this.adapter.execute(data);
        return {
            id: response.id,
            titulo: response.titulo,
            vagas: response.vagas,
            evento_tipo: response.evento_tipo,
            campeonato_id: response.campeonato_id,
            repescagem_id: response.repescagem_id || [],
            status: response.status,
            grupo_id: response.grupo_id || [],
            final_id: response.final_id || [],
            vencedor_id: response.vencedor_id || '',
        };
    }
}
export default CriarEventoUseCase;
