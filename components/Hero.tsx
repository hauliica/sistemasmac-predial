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
import {PresidenciaHero} from "@/components/vectors/presidenciaHero";

interface HeroSectionProps {
    title: string;
    subTitle: string;
    buttonText: string;
    buttonOnClick: () => void;
}

const handleCTAClick = () => {
    // Handle your call to action button click
    console.log("CTA button clicked!");
};

const HeroSection: React.FC = () => {
    return (
        <section className="h-screen grid grid-rows-3 md:grid-cols-2 gap-5 px-8">
            <div className="flex flex-col row-span-3 justify-center -mt-32">
                <h1 className="font-bold text-5xl mb-12 text-[#fbe3ba]">Paga Tu Impuesto Predial. De La Forma Mas Facil.</h1>
                <h2 className="font-semibold mb-5 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur culpa eveniet illum maxime non provident quod repudiandae tempore veritatis.</h2>
                <button
                    className="max-w-fit bg-orange-500 hover:bg-orange-600 focus:outline-none text-white font-semibold py-2 px-5 mt-5 rounded shadow"
                    onClick={handleCTAClick}
                >
                    Paga Ahora!
                </button>
            </div>
            <div className="w-full h-64 flex items-center justify-center md:row-span-3 md:h-screen">
                {/* Illustration, replace with your own */}
                <PresidenciaHero className="-mt-24"/>
            </div>
        </section>
    );
};

export default HeroSection;