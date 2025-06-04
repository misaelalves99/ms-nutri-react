// src/components/Hero.tsx

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

import { heroContents } from '../data/heroContents';

const Hero: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        emulateTouch
        swipeable
        interval={5000}
        transitionTime={600}
        className="carousel"
      >
        {heroContents.map(({ title, description, link, image }, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center h-screen bg-center bg-cover"
            style={{ backgroundImage: `url(${image})` }} // <-- corrigido aqui
          >

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-5 max-w-xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-5 text-emerald-900 drop-shadow-md">
                  {title}
                </h1>
                <p className="text-lg md:text-xl mb-8 text-emerald-800 drop-shadow-sm">
                  {description}
                </p>
                <Link
                  to={link}
                  className="inline-block bg-emerald-300 text-black font-semibold px-6 py-3 rounded-md hover:bg-emerald-400 hover:text-white transition"
                >
                  Saiba mais
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Hero;
