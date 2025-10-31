class ListarGrupoUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute() {
        const response = await this.adapter.execute();
        return response.map((response) => ({
            id: response.id,
            participantes_id: response.participantes_id,
            tabelas_ids: response.tabelas_ids,
            titulo: response.titulo,
        }));
    }
}
export default ListarGrupoUseCase;
