// import React from 'react';
// import { SVGProps } from 'react';
// import { PresidenciaHero } from '@/components/vectors/presidenciaHero';
// import {Container} from "@/components/Container";
//
// interface HeroSectionProps {
//   title: string;
//   subtitle: string;
// }
//
//
//
// const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
//   return (
//     <div className="z-10 h-screen flex items-center">
//       <div className="container lg:grid lg:grid-cols-12 lg:gap-x-8 mx-auto px-4 md:px-0">
//         <div className="flex flex-col justify-center lg:col-span-5 md:pr-4">
//           <h1 className="mb-4 pb-8 text-white text-4xl font-bold md:text-6xl lg:leading-snug">
//             {title}
//           </h1>
//           <p className="text-sm mix-blend-difference text-gray-600">{subtitle}</p>
//         </div>
//         <div className="relative lg:col-span-7 justify-center md:mt-0 md:pl-32">
//           <PresidenciaHero className="h-auto max-w-full" />
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default HeroSection;
import React from 'react';
import { PresidenciaHero } from '@/components/vectors/presidenciaHero';

interface HeroSectionProps {
  title: string;
  subTitle: string;
  buttonText: string;
  buttonOnClick: () => void;
}

const handleCTAClick = () => {
  // Handle your call to action button click
  console.log('CTA button clicked!');
};

const HeroSection: React.FC = () => {
  return (
    <section className="container mx-auto grid h-screen grid-rows-3 gap-5 px-8 md:grid-cols-2">
      <div className="row-span-3 -mt-32 flex flex-col justify-center">
        <h1 className="mb-12 md:leading-snug text-5xl font-medium text-amber-50">
          Paga Tu Impuesto Predial. De La Forma Mas Facil.
        </h1>
        <h2 className="mb-5 text-neutral-200 font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          consequuntur culpa eveniet illum maxime non provident quod repudiandae
          tempore veritatis.
        </h2>
        <button
          className="mt-5 rounded bg-orange-500 px-5 py-4  font-semibold text-white shadow hover:bg-orange-600 focus:outline-none"
          onClick={handleCTAClick}
        >
          Paga Ahora!
        </button>
      </div>
      <div className="flex h-64 w-full items-center justify-center md:row-span-3 md:h-screen">
        {/* Illustration, replace with your own */}
        <PresidenciaHero className="-mt-24" />
      </div>
    </section>
  );
};

export default HeroSection;
