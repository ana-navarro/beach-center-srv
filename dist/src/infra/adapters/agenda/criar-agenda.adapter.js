import Agenda from "../../schemas/agenda.js";
class CriarAgendaAdapter {
    async execute(data) {
        const payload = {
            dia: data.dia,
            horarioInicio: data.horarioInicio,
            horaFim: data.horaFim,
            local: data.local,
            quadra: data.quadra,
            disponivel: data.disponivel,
        };
        try {
            const new_agenda = await Agenda.create(payload);
            const response = {
                id: new_agenda._id.toString(),
                dia: new_agenda.dia,
                horarioInicio: new_agenda.horarioInicio,
                horaFim: new_agenda.horaFim,
                local: new_agenda.local,
                quadra: new_agenda.quadra,
                disponivel: new_agenda.disponivel,
            };
            return response;
        }
        catch (error) {
            console.log("Erro ao criar a agenda:", error);
            throw new Error("Erro ao criar a agenda");
        }
    }
}
export default CriarAgendaAdapter;
