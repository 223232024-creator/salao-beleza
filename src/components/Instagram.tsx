import { FaInstagram } from "react-icons/fa";

const instagramPosts = [
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
];

function Instagram() {
    return (
        <section className="section instagram">
            <h2>Siga nosso Instagram</h2>

            <p className="instagram-subtitle">
                Acompanhe nossos trabalhos, novidades e inspirações de beleza.
            </p>

            <div className="instagram-grid">
                {instagramPosts.map((post, index) => (
                    <img key={index} src={post} alt="Post do Instagram" />
                ))}
            </div>

            <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-button"
            >
                <FaInstagram />
                @elegancebeauty
            </a>
        </section>
    );
}

export default Instagram;