import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Vita from '../assets/carousel/vita-carousel.png';
import Sais from '../assets/carousel/sais-carousel.png';
import Amin from '../assets/carousel/amin-carousel.png';
// import HeroIlus from '../assets/hero/hero-Ilus.png'; // Adicione uma imagem quadrada aqui
import "./Hero.css";

const Hero = () => {
  const images = [
    Vita,
    Sais,
    Amin
  ];

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Vitaminas</h1>
          <p className="hero-description">
            As vitaminas são essenciais para o funcionamento saudável do corpo, fortalecendo o sistema imunológico, promovendo o crescimento celular e contribuindo para a saúde geral, presentes em alimentos variados e necessárias para manter o equilíbrio vital.
          </p>
          <a className="hero-button" href="/sobre">Saiba mais</a>
        </div>
        {/* <div className="hero-image">
          <img src={HeroIlus} alt="Imagem ilustrativa" />
        </div> */}
      </div>
      <div className="carousel-container">
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          useKeyboardArrows={true}
          autoPlay={true}
          emulateTouch={true}
          swipeable={true}
          interval={3000}
          transitionTime={500}
          className="carousel"
        >
          {images.map((url, index) => (
            <div className="slide" key={index}>
              <img src={url} alt={`Slide ${index + 1}`} className="slide-image" />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
