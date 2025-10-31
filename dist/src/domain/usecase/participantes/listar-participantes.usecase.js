class ListarParticipanteUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute() {
        const response = await this.adapter.execute();
        return response.map((response) => ({
            id: response.id,
            evento_id: response.evento_id,
            email: response.email,
            nome: response.nome,
            telefone: response.telefone,
        }));
    }
}
export default ListarParticipanteUseCase;
