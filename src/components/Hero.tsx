import { motion } from "framer-motion";

function Hero() {
    return (
        <section id="inicio" className="hero">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.4 }}
            >
                <h2>Realce sua beleza com elegância</h2>

                <p>
                    Cuidamos do seu cabelo, unhas, pele e autoestima com carinho,
                    profissionalismo e sofisticação.
                </p>

                <a className="btn" href="#contato">
                    Agendar horário
                </a>
            </motion.div>
        </section>
    );
}

export default Hero;