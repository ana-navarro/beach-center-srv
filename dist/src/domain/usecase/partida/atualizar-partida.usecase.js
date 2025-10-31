class AtualizarPartidaUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    statusMapper(status) {
        if (status === 'agendada') {
            return 'agendada';
        }
        ;
        if (status === 'em_andamento') {
            return 'em_andamento';
        }
        ;
        if (status === 'finalizada') {
            return 'finalizada';
        }
        return 'cancelada';
    }
    async execute({ id, data }) {
        const response = await this.adapter.execute({ id, data });
        return {
            id: response.id,
            competidores: response.competidores,
            dataPartida: response.dataPartida,
            horaFim: response.horaFim,
            horaInicio: response.horaInicio,
            placar_competidor_1: response.placar_competidor_1,
            placar_competidor_2: response.placar_competidor_2,
            status: this.statusMapper(response.status),
            vencedor: response.vencedor,
        };
    }
}
export default AtualizarPartidaUseCase;
