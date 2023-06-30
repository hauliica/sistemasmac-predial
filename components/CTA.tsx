import React, { useState, FormEvent } from 'react';

const CallToAction: React.FC = () => {
  const [userID, setUserID] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle submission here
    console.log('User ID:', userID);
  };

  return (
    <div className="flex flex-col items-center justify-center cta-back py-36 text-white">
      <h2 className="mb-4 text-2xl font-semibold">
        ¡Comience con nuestro servicio!
      </h2>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Ingrese su Cuenta-Folio"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
          className="rounded-md bg-white px-4 py-2 text-black"
        />
        <button
          type="submit"
          className="rounded-md bg-green-500 px-6 py-2 text-white hover:bg-green-600"
        >
          Consultar
        </button>
      </form>
    </div>
  );
};

export default CallToAction;
