export interface IPartida {
    id: string;
    competidores: string[];
    placar_competidor_1: number;
    placar_competidor_2: number;
    vencedor: string;
    horaInicio: Date;
    horaFim: Date;
    dataPartida: Date;
    status: 'agendada' | 'em_andamento' | 'finalizada' | 'cancelada';
}