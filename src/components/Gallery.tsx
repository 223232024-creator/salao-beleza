import { motion } from "framer-motion";

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
        title: "Ambiente elegante",
    },
    {
        src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
        title: "Corte feminino",
    },
    {
        src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
        title: "Maquiagem",
    },
    {
        src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
        title: "Manicure",
    },
];

function Gallery() {
    return (
        <section id="galeria" className="section gallery-section">
            <h2>Galeria</h2>

            <div className="gallery">
                {galleryImages.map((image, index) => (
                    <motion.div
                        className="gallery-item"
                        key={image.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <img src={image.src} alt={image.title} />

                        <div className="gallery-overlay">
                            <h3>{image.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;