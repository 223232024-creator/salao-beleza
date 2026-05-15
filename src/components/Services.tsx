import { motion } from "framer-motion";
import { FaCut, FaHandSparkles, FaRegEye, FaSpa } from "react-icons/fa";

const services = [
    { icon: <FaCut />, title: "Corte Feminino", price: "A partir de R$ 60,00" },
    { icon: <FaSpa />, title: "Escova", price: "A partir de R$ 45,00" },
    { icon: <FaHandSparkles />, title: "Manicure", price: "A partir de R$ 35,00" },
    { icon: <FaRegEye />, title: "Design de Sobrancelhas", price: "A partir de R$ 40,00" },
];

function Services() {
    return (
        <section id="servicos" className="section">
            <h2>Serviços e Preços</h2>

            <div className="cards">
                {services.map((service, index) => (
                    <motion.div
                        className="card"
                        key={service.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.price}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Services;