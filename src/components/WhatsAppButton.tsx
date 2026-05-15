import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
    return (
        <a
            className="whatsapp-button"
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
        >
            <FaWhatsapp />
        </a>
    );
}

export default WhatsAppButton;