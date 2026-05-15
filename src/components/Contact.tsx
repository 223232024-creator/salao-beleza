function Contact() {
    return (
        <section id="contato" className="section contact">
            <h2>Entre em Contato</h2>

            <form>
                <input type="text" placeholder="Seu nome" />
                <input type="tel" placeholder="Seu telefone" />

                <textarea placeholder="Mensagem"></textarea>

                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}

export default Contact;