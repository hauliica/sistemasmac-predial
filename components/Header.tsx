// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Transition } from '@headlessui/react';
// import { FiMenu } from 'react-icons/fi';
// import { AcunaLogo } from '@/components/vectors/acunalogo';
//
// // Link type
// interface NavLink {
//   name: string;
//   href: string;
//   dropdown?: NavLink[]; // For dropdown menus
// }
//
// // Component Props
// interface NavMenuProps {
//   links: NavLink[];
// }
//
// // NavMenu component
// const NavMenu: React.FC<NavMenuProps> = ({ links }) => {
//   const [activeDropdown, setActiveDropdown] = useState(-1); // For managing active dropdown menu
//   const [isMobileNavVisible, setMobileNavVisible] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//
//   // Function that checks if need to switch to mobile view
//   const checkMobile = () => {
//     setIsMobile(window.innerWidth < 640); // Switch to mobile view when screen is smaller than 640px
//   };
//
//   // Add an event listener when component mounts and remove it when it unmounts
//   useEffect(() => {
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//
//     return () => {
//       window.removeEventListener('resize', checkMobile);
//     };
//   }, []);
//
//   return (
//     <nav className="container relative z-10">
//       <div className="flex items-center justify-between py-2">
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
//
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
//
// export default NavMenu;

import React, { useState } from 'react';
import { AcunaLogo } from '@/components/vectors/acunalogo';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg md:bg-opacity-70">
      <div className="container mx-auto px-4">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <AcunaLogo className="h-12 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              {/* Navigation menu */}
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black"
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex sm:hidden">
            {/*  Mobile menu button */}
            <button
              onClick={toggle}
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? '' : 'hidden'
            } w-full flex-grow sm:flex sm:w-auto`}
          >
            {/* Mobile menu */}
            <div className="flex flex-col text-right sm:w-auto sm:flex-row sm:justify-end sm:px-0">
              <Link
                href="#"
                className="block rounded px-3 py-2 text-center text-sm font-medium"
              >
                Features
              </Link>
              <Link
                href="#"
                className="block rounded px-3 py-2 text-center text-sm font-medium"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="block rounded px-3 py-2 text-center text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
