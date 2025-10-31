class AtualizarAgendaUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute(request) {
        const response = await this.adapter.execute(request);
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
export default AtualizarAgendaUseCase;
