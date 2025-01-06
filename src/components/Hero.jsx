import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Vita from '../assets/carousel/vita-carousel.png';
import Sais from '../assets/carousel/sais-carousel.png';
import Amin from '../assets/carousel/amin-carousel.png';
import "./Hero.css";

const Hero = () => {
  const heroContents = [
    {
      title: "Vitaminas",
      description: "Essenciais para o funcionamento saudável do corpo",
      link: "/sobre",
      image: Vita
    },
    {
      title: "Sais Minerais",
      description: "Nutrientes vitais para o equilíbrio do organismo",
      link: "/sobre",
      image: Sais
    },
    {
      title: "Aminoácidos",
      description: "Os blocos de construção das proteínas",
      link: "/sobre",
      image: Amin
    }
  ];

  return (
    <section className="hero">
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
        autoPlay={true}
        emulateTouch={true}
        swipeable={true}
        interval={5000}
        transitionTime={600}
        className="carousel"
      >
        {heroContents.map((content, index) => (
          <div
            className="hero-slide"
            key={index}
            style={{
              backgroundImage: `url(${content.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="hero-title">{content.title}</h1>
                <p className="hero-description">{content.description}</p>
                <a className="hero-button" href={content.link}>Saiba mais</a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Hero;
