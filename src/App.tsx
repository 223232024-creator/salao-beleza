import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Schedule />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;