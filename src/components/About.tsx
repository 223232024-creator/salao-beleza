function About() {
    return (
        <section id="sobre" className="section about">
            <div className="about-content">
                <div className="about-text">
                    <h2>Sobre o Salão</h2>

                    <p>
                        No Elegance Beauty, cada detalhe foi pensado para oferecer uma
                        experiência única de beleza, cuidado e bem-estar.
                    </p>

                    <p>
                        Trabalhamos com carinho, profissionalismo e atenção para realçar a
                        beleza de cada cliente de forma especial.
                    </p>
                </div>

                <div className="about-image">
                    <img
                        src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
                        alt="Profissional cuidando do cabelo"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;