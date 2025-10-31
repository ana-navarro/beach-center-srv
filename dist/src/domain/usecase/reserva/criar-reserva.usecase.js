class CriarReservaUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute(data) {
        const response = await this.adapter.execute(data);
        return {
            id: response.id,
            agenda_id: response.agenda_id,
            email: response.email,
            nome: response.nome,
            pago: response.pago,
            precisa_materias: response.precisa_materias,
            telefone: response.telefone,
            materiais: response.materiais || []
        };
    }
}
export default CriarReservaUseCase;
