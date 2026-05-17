import { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    function handleContact(e: React.FormEvent) {
        e.preventDefault();

        if (!name || !phone || !message) {
            alert("Preencha todos os campos.");
            return;
        }

        const text = `Olá! Gostaria de saber mais sobre os serviços.

👤 Nome: ${name}
📞 Telefone: ${phone}

📝 Mensagem:
${message}`;

        const whatsappUrl = `https://wa.me/5511982138403?text=${encodeURIComponent(
            text
        )}`;

        window.open(whatsappUrl, "_blank");
    }

    return (
        <section id="contato" className="section contact">
            <h2>Entre em Contato</h2>

            <form onSubmit={handleContact}>
                <input
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="tel"
                    placeholder="Seu telefone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <textarea
                    placeholder="Mensagem"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}

export default Contact;