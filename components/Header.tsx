// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Transition } from '@headlessui/react';
// import { FiMenu } from 'react-icons/fi';
// import { AcunaLogo } from '@/components/vectors/acunalogo';

// // Link type
// interface NavLink {
//   name: string;
//   href: string;
//   dropdown?: NavLink[]; // For dropdown menus
// }

// // Component Props
// interface NavMenuProps {
//   links: NavLink[];
// }

// // NavMenu component
// const Header: React.FC<NavMenuProps> = ({ links }) => {
//   const [activeDropdown, setActiveDropdown] = useState(-1); // For managing active dropdown menu
//   const [isMobileNavVisible, setMobileNavVisible] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Function that checks if need to switch to mobile view
//   const checkMobile = () => {
//     setIsMobile(window.innerWidth < 640); // Switch to mobile view when screen is smaller than 640px
//   };

//   // Add an event listener when component mounts and remove it when it unmounts
//   useEffect(() => {
//     checkMobile();
//     window.addEventListener('resize', checkMobile);

//     return () => {
//       window.removeEventListener('resize', checkMobile);
//     };
//   }, []);

//   return (
//     <nav className="relative z-10">
//       <div className="container mx-auto flex items-center justify-between py-2">
//         <div>
//           <AcunaLogo className="h-14" />
//         </div>
//         <div className="sm:hidden">
//           <button onClick={() => setMobileNavVisible(!isMobileNavVisible)}>
//             <FiMenu size={24} />
//           </button>
//         </div>
//         {!isMobile && (
//           <ul className="hidden space-x-4 sm:flex">
//             {links.map((link, index) => (
//               <li
//                 key={index}
//                 onMouseEnter={() => setActiveDropdown(index)} // Show dropdown on mouse enter
//                 onMouseLeave={() => setActiveDropdown(-1)} // Hide dropdown on mouse leave
//                 className="group relative" // group is used to control child element styles on hover
//               >
//                 <Link href={link.href} className="block px-2 py-1 text-sm">
//                   {link.name}
//                 </Link>

//                 {/* Render dropdown menu if any */}
//                 {link.dropdown && link.dropdown.length > 0 && (
//                   <ul
//                     className={`absolute left-0 mt-1 space-y-1 rounded bg-white px-4 py-2 shadow-lg ${
//                       activeDropdown === index ? 'block' : 'hidden'
//                     }`} // Show when this item is the active dropdown
//                   >
//                     {link.dropdown.map((item, i) => (
//                       <li key={i}>
//                         <Link
//                           href={item.href}
//                           className="block px-2 py-1 text-sm"
//                         >
//                           {item.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//       {/* Mobile navigation */}
//       <Transition show={isMobileNavVisible}>
//         <div className="sm:hidden">
//           <ul className="space-y-2 divide-y divide-gray-200 bg-white py-4">
//             {links.map((link, index) => (
//               <li key={index}>
//                 <Link href={link.href} className="block px-2 py-1 text-sm">
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </Transition>
//     </nav>
//   );
// };

// export default Header;

// import React, {useState} from 'react';
// import Link from 'next/link';
// import {AcunaLogo} from "@/components/vectors/acunalogo";
//
// const Header: React.FC = () => {
//     const [isOpen, setIsOpen] = useState(false);
//
//     const toggle = () => {
//         setIsOpen(!isOpen);
//     };
//
//     return (
//         <nav className="bg-white bg-opacity-70 shadow-lg fixed w-full z-50">
//             <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
//                 <div className="flex justify-between items-center">
//                     <div className="text-2xl font-bold text-gray-800 md:text-3xl">
//                         <AcunaLogo className="w-24"/>
//                     </div>
//                     <div className="md:hidden">
//                         <button type="button" className="block text-gray-800 hover:text-gray-700 focus:text-gray-700
//                         focus:outline-none" onClick={toggle}>
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                                  stroke="currentColor"
//                                  className="h-6 w-6 fill-current">
//                                 {isOpen ? (
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                                           d="M6 18L18 6M6 6l12 12"/>
//                                 ) : (
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                                           d="M4 6h16M4 12h16M4 18h16"/>
//                                 )}
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//                 <div
//                     className={`flex flex-col px-2 mt-2 md:flex-row md:mt-0 md:mx-1 ${isOpen ? '' : 'hidden md:visible'}`}
//                     id="navbar-content">
//                     <Link href="/" className="my-1 text-sm text-gray-700 font-medium md:mx-2 md:my-0">Inicio</Link>
//                     <Link href="/consulta"
//                           className="my-1 text-sm text-gray-700 font-medium md:mx-2 md:my-0">Consulta</Link>
//                     <Link href="/solicita"
//                           className="my-1 text-sm text-gray-700 font-medium md:mx-2 md:my-0">Solicita</Link>
//                     <Link href="/contacto"
//                           className="my-1 text-sm text-gray-700 font-medium md:mx-2 md:my-0">Contacto</Link>
//                     <Link href="/ayuda" className="my-1 text-sm text-gray-700 font-medium md:mx-2 md:my-0">Ayuda</Link>
//                 </div>
//             </div>
//         </nav>
//     );
// };
//
// export default Header;

// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { AcunaLogo } from './vectors/acunalogo';

// const Header: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-blue-500 px-6 py-3 sm:flex sm:items-center sm:justify-between sm:px-8">
//       <div className="flex items-center justify-between">
//         <div>
//           <AcunaLogo className='h-20'/>
//         </div>
//         <div className="sm:hidden">
//           <button type="button" onClick={() => setIsOpen(!isOpen)}>
//             <svg
//               className="h-6 w-6 fill-current text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//             >
//               {isOpen ? (
//                 <path fillRule="evenodd" d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path fillRule="evenodd" d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>
//       <nav
//         className={`${
//           isOpen ? 'block' : 'hidden'
//         } px-2 pb-4 pt-2 text-white sm:flex sm:space-x-4 sm:p-0`}
//       >
//         <Link href="/" className="block px-2 py-1 hover:text-blue-200">
//           Home
//         </Link>
//         <Link href="/about" className="block px-2 py-1 hover:text-blue-200">
//           About
//         </Link>
//         <Link href="/contact" className="block px-2 py-1 hover:text-blue-200">
//           Contact
//         </Link>
//         {/* Add more navigation links as needed */}
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import Link from 'next/link';
import { AcunaLogo } from './vectors/acunalogo';

interface HeaderProps {
  doShow: boolean | undefined;
}

const Header: React.FC<HeaderProps> = ({ doShow = true }: HeaderProps) => {
  return (
    <header>
      <nav className="border-gray-200 bg-gray-50 bg-opacity-20 px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link className="flex items-center" href="https://flowbite.com">
            <AcunaLogo className="w-24" />
          </Link>
          <div hidden={doShow} className="flex items-center lg:order-2">
            <Link
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-2 rounded-lg px-4 py-2 text-sm font-medium text-amber-900 focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5"
              href="#"
            >
              Consulta
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <Link
                  className="bg-primary-700 lg:text-primary-700 block rounded py-2 pl-3 pr-4 text-slate-950 lg:bg-transparent lg:p-0"
                  href="#"
                >
                  Como Se Hace
                </Link>
              </li>
              <li>
                <Link
                  className="bg-primary-700 lg:text-primary-700 block rounded py-2 pl-3 pr-4 text-slate-950 text-white dark:text-white lg:bg-transparent lg:p-0"
                  href="#"
                >
                  Beneficios
                </Link>
              </li>
              <li>
                <Link
                  className="bg-primary-700 lg:text-primary-700 block rounded py-2 pl-3 pr-4 text-slate-950 text-white dark:text-white lg:bg-transparent lg:p-0"
                  href="#"
                >
                  Consulta
                </Link>
              </li>
              <li>
                <Link
                  className="bg-primary-700 lg:text-primary-700 block rounded py-2 pl-3 pr-4 text-slate-950 text-white dark:text-white lg:bg-transparent lg:p-0"
                  href="#"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  className="bg-primary-700 lg:text-primary-700 block rounded py-2 pl-3 pr-4 text-slate-950 text-white dark:text-white lg:bg-transparent lg:p-0"
                  href="#"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
