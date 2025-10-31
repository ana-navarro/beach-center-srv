import Agenda from "../../schemas/agenda.js";
class ListarAgendasAdapter {
    schemaToResponse(item) {
        return {
            id: item._id.toString(),
            dia: item.dia,
            horarioInicio: item.horarioInicio,
            horaFim: item.horaFim,
            local: item.local,
            quadra: item.quadra,
            disponivel: item.disponivel,
        };
    }
    async execute() {
        try {
            const list = await Agenda.find();
            return list.map(this.schemaToResponse);
        }
        catch (error) {
            console.log("Erro ao listar a agenda:", error);
            throw new Error("Erro ao listar a agenda");
        }
    }
}
export default ListarAgendasAdapter;
