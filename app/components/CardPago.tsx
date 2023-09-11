function CardPago() {
  return (
    <section className="container mx-auto mb-6 rounded-sm bg-white p-4 shadow-md">
      <h2 className="text-lg font-semibold text-gray-800">Pago</h2>
      <div className="mt-4 flex space-x-4">
        <button className="rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600">
          Pagar Ahora
        </button>
        <button className="rounded-md bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400">
          Pagar Después
        </button>
      </div>
      <div className="mt-4">
        <p className="text-gray-600 text-lg font-bold">
          Monto a Pagar: $500.00
        </p>
        <p className="text-gray-600">Opciones de Pago:</p>
        <ul className="list-disc pl-6">
          <li className="text-gray-600">Tarjeta de Crédito</li>
          <li className="text-gray-600">Transferencia Bancaria</li>
        </ul>
      </div>
    </section>
  );
}

export default CardPago;
