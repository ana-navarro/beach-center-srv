class AtualizarGrupoUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute({ id, data }) {
        const response = await this.adapter.execute({ id, data });
        return {
            id: response.id,
            participantes_id: response.participantes_id,
            tabelas_ids: response.tabelas_ids,
            titulo: response.titulo,
        };
    }
}
export default AtualizarGrupoUseCase;
