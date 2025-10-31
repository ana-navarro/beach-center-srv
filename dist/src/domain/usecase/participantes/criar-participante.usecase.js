class CriarParticipanteUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute(data) {
        const response = await this.adapter.execute(data);
        return {
            id: response.id,
            evento_id: response.evento_id,
            email: response.email,
            nome: response.nome,
            telefone: response.telefone,
        };
    }
}
export default CriarParticipanteUseCase;
