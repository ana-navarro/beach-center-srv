class ListarCampeonatosUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute() {
        const response = await this.adapter.execute();
        return response.map((campeonato) => ({
            id: campeonato.id,
            titulo: campeonato.titulo,
            esporte: campeonato.esporte,
            descricao: campeonato.descricao || '',
            dataInicio: campeonato.dataInicio,
            dataFim: campeonato.dataFim,
            status: campeonato.status,
        }));
    }
}
export default ListarCampeonatosUseCase;
