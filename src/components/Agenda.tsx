import { useState } from "react";
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

const bookedTimes = ["10:00", "15:00"];

function Agenda() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [selectedTime, setSelectedTime] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");

    async function handleSchedule() {
        if (!selectedDate || !selectedTime || !name || !phone || !service) {
            alert("Preencha todos os campos e escolha um horário.");
            return;
        }

        const dateFormatted = selectedDate.toISOString().split("T")[0];
        const dateDisplay = selectedDate.toLocaleDateString("pt-BR");

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
            alert(error.message);
            return;
        }

        const message = `Olá! Gostaria de agendar um horário.

👤 Nome: ${name}
📞 Telefone: ${phone}
💅 Serviço: ${service}

📅 Data: ${dateDisplay}
⏰ Horário: ${selectedTime}`;

        const whatsappUrl = `https://wa.me/5511918556986?text=${encodeURIComponent(
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
                        >
                            Solicitar Agendamento
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Agenda;