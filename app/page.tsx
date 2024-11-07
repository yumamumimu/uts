import "./yuma-style.css";
import Hero from "./components/hero";
import Resume from "./components/Resume";
import Galeri from "./components/Gallery";
import Rating from "./components/ContactForm";

export default function Gallery() {
  return (
    <section>
      <div style={{ marginBottom: '40px' }}>
        <Hero />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <Resume />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <Galeri />
      </div>
      <div style={{ marginTop: '40px' }}>
        <Rating />
      </div>
    </section>
  );
}
