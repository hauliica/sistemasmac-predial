import React from "react";

function CardPropietario() {
  return (
    <div className="bg-white p-4 rounded-sm shadow-md">
      <h2 className="text-lg font-semibold text-gray-800">
        Información de la Propiedad
        
      </h2>
      <div className="flex items-center space-x-4 mt-4">
        <svg
          className="h-6 w-6 text-indigo-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Agrega aquí tu icono de casa en SVG */}
        </svg>
        <div>
          <p className="text-gray-600">
            Dirección de la Propiedad: 456 Calle del Olmo
          </p>
          <p className="text-gray-600">Monto de Deuda: $500.00</p>
        </div>
      </div>
    </div>
  );
}

export default CardPropietario;