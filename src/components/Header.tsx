import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="header">
            <h1>Elegance Beauty</h1>

            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <nav className={menuOpen ? "nav open" : "nav"}>
                <a href="#inicio" onClick={closeMenu}>Início</a>
                <a href="#sobre" onClick={closeMenu}>Sobre</a>
                <a href="#servicos" onClick={closeMenu}>Serviços</a>
                <a href="#galeria" onClick={closeMenu}>Galeria</a>
                <a href="#contato" onClick={closeMenu}>Contato</a>
            </nav>
        </header>
    );
}

export default Header;