class CriarGrupoUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute(data) {
        const response = await this.adapter.execute(data);
        return {
            id: response.id,
            participantes_id: response.participantes_id,
            tabelas_ids: response.tabelas_ids,
            titulo: response.titulo,
        };
    }
}
export default CriarGrupoUseCase;
