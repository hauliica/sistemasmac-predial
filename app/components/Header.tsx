import { Link } from "@remix-run/react";
import React from "react";
import { AcunaLogo } from "~/assets/acunalogo";

function Header() {
  return (
    <header className="mb-6 bg-white px-6 py-2 shadow-sm lg:px-16">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="#" className="text-2xl font-bold text-indigo-500">
          <AcunaLogo className="h-12"/>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="#" className="text-gray-500 hover:text-indigo-500">
              Preguntas Frecuentes
            </Link>
          </li>
          <li>
            <Link to="#" className="text-gray-500 hover:text-indigo-500">
              Contáctanos
            </Link>
          </li>
          <li>
            <Link to="#" className="text-gray-500 hover:text-indigo-500">
              Ayuda
            </Link>
          </li>
          <li>
            <Link to="#" className="text-red-500 hover:text-red-600">
              Salir
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
