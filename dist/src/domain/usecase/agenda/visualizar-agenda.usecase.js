class VisualizarAgendaUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute(id) {
        const response = await this.adapter.execute(id);
        return {
            id: response.id,
            dia: response.dia,
            horarioInicio: response.horarioInicio,
            horaFim: response.horaFim,
            local: response.local,
            quadra: response.quadra,
            disponivel: response.disponivel,
        };
    }
}
export default VisualizarAgendaUseCase;
