import React from 'react';
// Import your PresidenciaHero component
// import PresidenciaHero from './PresidenciaHero';
import {PresidenciaHero} from "~/assets/PresidenciaVector";

const handleCTAClick = () => {
  // Your click handler logic here
};

const HeroSection: React.FC = () => {
  return (
    <section className="container mt-4 mx-auto grid h-screen grid-rows-3 gap-5 md:grid-cols-2">
      <div className="pr-8 row-span-3 -mt-8 flex flex-col justify-center">
        <h1 className="md:mb-8 md:leading-snug text-5xl font-medium text-amber-50">
          Paga Tu Impuesto Predial. De La Forma Mas Facil.
        </h1>
        <h2 className="mb-5 text-neutral-200 font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          consequuntur culpa eveniet illum maxime non provident quod repudiandae
          tempore veritatis.
        </h2>
        <button
          className="mt-5 rounded bg-orange-200 px-5 py-4 font-semibold text-orange-700 hover:text-orange-100 hover:bg-orange-600 focus:outline-none transition-all"
          onClick={handleCTAClick}
        >
          Paga Ahora!
        </button>
      </div>
      <div className="flex h-16 w-full items-center justify-center md:row-span-3 md:h-screen">
        <PresidenciaHero className="-mt-6"/>
      </div>
    </section>
  );
};


export default HeroSection;
