import { FaMapMarkerAlt, FaRoute } from "react-icons/fa";

function Location() {
    return (
        <section className="section location">
            <h2>Onde Estamos</h2>

            <p className="location-subtitle">
                Venha viver uma experiência de beleza e cuidado conosco.
            </p>

            <div className="location-content">
                <div className="location-info">
                    <h3>Elegance Beauty</h3>

                    <p>
                        <FaMapMarkerAlt /> Rua Exemplo, 123 - Centro
                    </p>

                    <p>São Paulo - SP</p>

                    <a
                        href="https://www.google.com/maps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="location-button"
                    >
                        <FaRoute />
                        Como chegar
                    </a>
                </div>

                <div className="map-box">
                    <iframe
                        src="https://www.google.com/maps?q=São Paulo SP&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa do salão"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default Location;