import {
    FaInstagram,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaClock,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Elegance Beauty</h3>

                    <p>
                        Beleza, cuidado e sofisticação para realçar sua melhor versão.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Contato</h3>

                    <p>
                        <FaWhatsapp /> (11) 99999-8888
                    </p>

                    <p>
                        <FaInstagram /> @elegancebeauty
                    </p>

                    <p>
                        <FaMapMarkerAlt /> São Paulo - SP
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Horários</h3>

                    <p>
                        <FaClock /> Segunda à Sexta
                    </p>

                    <p>09:00 às 18:00</p>

                    <p>Sábado: 09:00 às 14:00</p>
                </div>
            </div>

            <div className="footer-bottom">
                © 2026 Elegance Beauty - Todos os direitos reservados
            </div>
        </footer>
    );
}

export default Footer;