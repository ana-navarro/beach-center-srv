class ListarUsuarioUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute() {
        const response = await this.adapter.execute();
        return response.map((response) => ({
            id: response.id,
            email: response.email,
            nome: response.nome,
            telefone: response.telefone,
            tipo: response.tipo,
        }));
    }
}
export default ListarUsuarioUseCase;
