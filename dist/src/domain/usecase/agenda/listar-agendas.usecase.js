class ListarAgendaUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute() {
        const response = await this.adapter.execute();
        return response.map((agenda) => ({
            id: agenda.id,
            dia: agenda.dia,
            horarioInicio: agenda.horarioInicio,
            horaFim: agenda.horaFim,
            local: agenda.local,
            quadra: agenda.quadra,
            disponivel: agenda.disponivel,
        }));
    }
}
export default ListarAgendaUseCase;
