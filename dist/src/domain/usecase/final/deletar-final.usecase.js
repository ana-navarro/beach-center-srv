class DeletarFinalUseCase {
    adapter;
    constructor(adapter) {
        this.adapter = adapter;
    }
    async execute(id) {
        await this.adapter.execute(id);
    }
}
export default DeletarFinalUseCase;
