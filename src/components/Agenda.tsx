import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { supabase } from "../lib/supabase";

const allTimes = [
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
];

function Agenda() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [selectedTime, setSelectedTime] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [bookedTimes, setBookedTimes] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchAppointments() {
            if (!selectedDate) return;

            const dateFormatted = selectedDate.toISOString().split("T")[0];

            const { data, error } = await supabase
                .from("appointments")
                .select("appointment_time")
                .eq("appointment_date", dateFormatted);

            if (error) {
                console.error(error);
                return;
            }

            const times = data.map((item) => item.appointment_time);

            console.log("Horários ocupados:", times);

            setBookedTimes(times);
        }

        fetchAppointments();
    }, [selectedDate]);

    async function handleSchedule() {
        if (!selectedDate || !selectedTime || !name || !phone || !service) {
            alert("Preencha todos os campos e escolha um horário.");
            return;
        }
        setLoading(true);
        const dateFormatted = selectedDate.toISOString().split("T")[0];
        const dateDisplay = selectedDate.toLocaleDateString("pt-BR");
        console.log("Data salva:", dateFormatted);

        const { error } = await supabase.from("appointments").insert([
            {
                name,
                phone,
                service,
                appointment_date: dateFormatted,
                appointment_time: selectedTime,
            },
        ]);
        
        if (error) {
            console.error(error);

            setLoading(true);

            if (error.code === "23505") {
                alert("Esse horário já foi reservado. Escolha outro horário.");
                return;
            }

            setLoading(true);

            alert(error.message);
            return;
        }

        setBookedTimes((prev) => [...prev, selectedTime]);
        alert("Agendamento realizado com sucesso!");

        setLoading(false);

    const message = `✨ Novo Agendamento pelo Site ✨

    ✅ Agendamento confirmado

👤 Cliente: ${name}
📞 Telefone: ${phone}
💅 Serviço: ${service}

📅 Data: ${dateDisplay}
⏰ Horário: ${selectedTime}';

Mensagem enviada automaticamente pelo site.`;

        const whatsappUrl = `https://wa.me/5511982138403?text=${encodeURIComponent(
            message
        )}`;

        window.open(whatsappUrl, "_blank");
    }

    return (
        <section id="agenda" className="section schedule">
            <h2>Agende seu Horário</h2>

            <p className="schedule-subtitle">
                Escolha uma data e veja os horários disponíveis
            </p>

            <div className="schedule-content">
                <div className="calendar-box">
                    <Calendar
                        onChange={(value) => {
                            setSelectedDate(value as Date);
                            setSelectedTime("");
                        }}
                        value={selectedDate}
                        minDate={new Date()}
                    />
                </div>

                <div className="times-box">
                    <h3>
                        Horários para {selectedDate?.toLocaleDateString("pt-BR")}
                    </h3>

                    <div className="times-grid">
                        {allTimes.map((time) => {
                            const isBooked = bookedTimes.includes(time);

                            return (
                                <button
                                    key={time}
                                    className={
                                        selectedTime === time
                                            ? "time-button selected"
                                            : isBooked
                                                ? "time-button booked"
                                                : "time-button"
                                    }
                                    disabled={isBooked}
                                    onClick={() => setSelectedTime(time)}
                                >
                                    {time}
                                </button>
                            );
                        })}
                    </div>

                    <div className="schedule-legend">
                        <span>
                            <strong className="legend available"></strong>
                            Disponível
                        </span>

                        <span>
                            <strong className="legend selected"></strong>
                            Selecionado
                        </span>

                        <span>
                            <strong className="legend booked"></strong>
                            Ocupado
                        </span>
                    </div>

                    <div className="schedule-form">
                        <input
                            type="text"
                            placeholder="Seu nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="schedule-input"
                        />

                        <input
                            type="tel"
                            placeholder="Seu telefone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="schedule-input"
                        />

                        <select
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className="schedule-input"
                        >
                            <option value="">Escolha um serviço</option>
                            <option>Corte Feminino</option>
                            <option>Escova</option>
                            <option>Manicure</option>
                            <option>Sobrancelhas</option>
                        </select>

                        <button
                            type="button"
                            className="schedule-button"
                            onClick={handleSchedule}
                            disabled={loading}
                        >
                            {loading ? "Agendando..." : "Solicitar Agendamento"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Agenda;