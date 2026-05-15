function Testimonials() {
    return (
        <section className="section testimonials">
            <h2>O que nossas clientes dizem</h2>

            <p className="testimonials-subtitle">
                Veja a experiência de quem já passou pelo nosso salão
            </p>

            <div className="cards">
                <div className="card">
                    <p>
                        “Atendimento maravilhoso! Saí do salão me sentindo renovada.”
                    </p>
                    <h3>— Ana Paula</h3>
                </div>

                <div className="card">
                    <p>
                        “Profissionais incríveis, ambiente lindo e resultado perfeito.”
                    </p>
                    <h3>— Juliana Santos</h3>
                </div>

                <div className="card">
                    <p>
                        “Amei o cuidado, o carinho e a qualidade do serviço.”
                    </p>
                    <h3>— Camila Rocha</h3>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;