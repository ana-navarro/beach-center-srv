import Reserva from "../../schemas/reserva.js";
class CriarReservaAdapter {
    async execute(data) {
        const payload = {
            agenda_id: data.agenda_id,
            nome: data.nome,
            telefone: data.telefone,
            email: data.email,
            pago: data.pago,
            precisa_materias: data.precisa_materias,
            materiais: data.materiais ? data.materiais : [],
        };
        try {
            const response = await Reserva.create(payload);
            const result = {
                id: response._id.toString(),
                agenda_id: String(response.agenda_id),
                nome: String(response.nome),
                telefone: String(response.telefone),
                email: String(response.email),
                pago: response.pago,
                precisa_materias: response.precisa_materias,
                materiais: response.materiais ? response.materiais : [],
            };
            return result;
        }
        catch (error) {
            console.log("Erro ao criar a reserva:", error);
            throw new Error("Erro ao criar a reserva");
        }
    }
}
export default CriarReservaAdapter;
