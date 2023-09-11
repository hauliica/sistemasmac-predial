import { Link } from '@remix-run/react';
import React from 'react';
// Import your PresidenciaHero component
// import PresidenciaHero from './PresidenciaHero';
import {PresidenciaHero} from "~/assets/PresidenciaVector";
import { AcunaLogo } from '~/assets/acunalogo';

const handleCTAClick = () => {
  // Your click handler logic here
};

const HeroSection: React.FC = () => {
  return (
    <>
    <header className="flex items-cemter justify-between bg-white py-4">
      <Link to="/" className="inline-flex items-center">
        <AcunaLogo className="h-auto w-6"/>
      </Link>

      <nav className="hidden lg:flex gap-12">
        <Link className="text-lg font-semibold text-grey-600">Inicio</Link>
        <Link className="text-lg font-semibold text-grey-600">Inicio</Link>
        <Link className="text-lg font-semibold text-grey-600">Inicio</Link>
        <Link className="text-lg font-semibold text-grey-600">Inicio</Link>
      </nav>

    </header>
    </>
  //   <header className="flex items-center sticky top-0 backdrop-blur-md bg-opacity-70 justify-between py-2 md:py-4 px-6 z-20 bg-neutral-50 shadow-md">
  //   <div className="container mx-auto">
  //     <div className="flex items-center justify-between w-full">
  //       <div className="flex items-center">
  //         <AcunaLogo className="w-36 h-10 object-cover" />
  //       </div>
  //       <div className="hidden md:flex md:items-center md:justify-end md:w-1/2">
  //         <nav className="flex items-center justify-between gap-12 text-base text-darkslategray font-poppins">
  //           <Link
  //             to="/"
  //             className="no-underline text-current leading-6 font-medium"
  //           >
  //             Inicio
  //           </Link>
  //           <Link
  //             to="/consulta"
  //             className="no-underline text-current leading-6 font-medium"
  //           >
  //             Consulta
  //           </Link>
  //           <Link
  //             to="/ayuda"
  //             className="no-underline text-current leading-6 font-medium"
  //           >
  //             Ayuda
  //           </Link>
  //           <Link
  //             to="/contacto"
  //             className="no-underline text-current leading-6 font-medium"
  //           >
  //             Contacto
  //           </Link>
  //         </nav>
  //       </div>
  //       <div className="md:hidden flex items-center justify-end w-1/2">
  //         <button
  //           onClick={() => setIsOpen(!isOpen)}
  //           className="flex items-center px-3 py-2 border rounded"
  //         >
  //           <svg
  //             className="w-6 h-6"
  //             fill="none"
  //             stroke="currentColor"
  //             viewBox="0 0 24 24"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth={2}
  //               d="M4 6h16M4 12h16M4 18h16"
  //             />
  //           </svg>
  //         </button>
  //       </div>
  //     </div>
  //     {isOpen && (
  //       <div className="md:hidden w-full">
  //         <nav className="flex flex-col items-start justify-start gap-4 text-base text-darkslategray">
  //           <Link
  //             to="/"
  //             className="no-underline text-current leading-6 font-medium"
  //           >
  //             Inicio
  //           </Link>
  //           <Link
  //             to="/consulta"
  //             className="no-underline text-current leading-6 font-medium"
  //           >
  //             Consulta
  //           </Link>
  //           <Link
  //             to="/ayuda"
  //             className="no-underline text-current leading-6 font-medium"
  //           >
  //             Ayuda
  //           </Link>
  //           <Link
  //             to="/contacto"
  //             className="no-underline text-current leading-6 font-medium"
  //           >
  //             Contacto
  //           </Link>
  //         </nav>
  //       </div>
  //     )}
  //   </div>
  // </header>

  {/* Hero Section */}
  // <section className="flex-grow flex items-center justify-center p-4 md:p-8 z-0">
  //   <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center h-full">
  //     <div className="w-full md:w-1/2 text-center md:text-left p-4 lg:-mt-40">
  //       <h1 className="text-4xl md:w-11/12 md:text-6xl font-sans font-bold text-white mb-8">
  //         Bienvenido al Portal de Impuesto Predial de Acuña
  //       </h1>
  //       <p className="text-md md:text-lg md:w-10/12 px-2 leading-1 text-zinc-200 tracking-tighter mb-12">
  //         Pagando tus impuestos, estás construyendo un mejor mañana. Te
  //         Ofrecemos una solución sencilla y segura para mantener tus pagos
  //         de impuesto predial al día. No más filas, no más papel.
  //       </p>
  //       <form
  //         action="#"
  //         method="post"
  //         className="flex justify-center md:justify-start items-center w-50"
  //       >
  //         <label htmlFor="idInput" className="sr-only">
  //           Ingresa Cuenta-Folio
  //         </label>
  //         <div className="relative flex-grow">
  //           <input
  //             id="idInput"
  //             type="text"
  //             placeholder="Enter your Cuenta-Folio"
  //             className="p-2 py-4 rounded-md w-1/2 mr-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
  //             aria-required="true"
  //           />
  //           <button
  //             type="submit"
  //             className="px-4 py-4 rounded-md bg-[#ff9836] border-2 border-[#cc792b] text-[#42240d] font-semibold hover:bg-[#ffbf36] transition-colors duration-300"
  //           >
  //             Paga Ahora
  //           </button>
  //         </div>
  //       </form>
  //     </div>

  //     <div className="w-full md:w-1/2 p-4 flex justify-center">
  //       <PresidenciaHero className="max-h-[300px] md:max-h-full" />
  //     </div>
  //   </div>
  // </section>
  );
};


export default HeroSection;
