// import { Form, Link, useNavigate } from "@remix-run/react";
// import { useState } from "react";
// import { AcunaLogo } from "~/assets/acunalogo";

// export default function Solicita() {
//   const [form, setForm] = useState({
//     curp: "",
//     firstName: "",
//     lastName: "",
//     address: "",
//     email: "",
//     phone: "",
//   });

//   // Define navigate from useNavigate hook for redirection after form submission
//   const navigate = useNavigate();

//   // Function to handle form field changes
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Send form data to server

//     // Redirect to success page
//     navigate("/solicita/success");
//   };

//   return (
//     <section className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md mx-auto p-8 space-y-6 bg-white rounded shadow-lg"
//       >
//         <h2 className="text-2xl font-bold text-center">
//           Register for Property Tax Payment
//         </h2>
//         <input
//           type="text"
//           name="curp"
//           value={form.curp}
//           onChange={handleChange}
//           placeholder="CURP"
//           className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 focus:ring-indigo-500"
//           required
//         />
//         <input
//           type="text"
//           name="firstName"
//           value={form.firstName}
//           onChange={handleChange}
//           placeholder="First Name"
//           className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 focus:ring-indigo-500"
//           required
//         />
//         <input
//           type="text"
//           name="lastName"
//           value={form.lastName}
//           onChange={handleChange}
//           placeholder="Last Name"
//           className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 focus:ring-indigo-500"
//           required
//         />
//         <input
//           type="text"
//           name="address"
//           value={form.address}
//           onChange={handleChange}
//           placeholder="Address"
//           className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 focus:ring-indigo-500"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Email Address"
//           className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 focus:ring-indigo-500"
//           required
//         />
//         <input
//           type="tel"
//           name="phone"
//           value={form.phone}
//           onChange={handleChange}
//           placeholder="Cell Phone Number"
//           className="w-full px-3 py-2 border border-gray-300 rounded focus:border-indigo-500 focus:ring-indigo-500"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700"
//         >
//           Register
//         </button>
//       </form>
//     </section>
//   );
// }

// src/routes/cuenta-folio-request.tsx

// import * as React from "react";
// import { Link } from "@remix-run/react";

// Header Component
// const Header: React.FC = () => {
//   return (
//     <header className="bg-blue-500 p-4 flex justify-between items-center">
//       <div className="text-white text-2xl font-bold">
//         Municipality of Ciudad Acuña
//       </div>
//       <nav>
//         <ul className="flex space-x-4 text-white">
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/online-payments">Online Payments</a>
//           </li>
//           <li>
//             <a href="/property-tax">Property Tax</a>
//           </li>
//           <li>
//             <a href="/contact-us">Contact Us</a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// // Request Form Component
// const RequestForm: React.FC = () => {
//   return (
//     <div className="bg-white p-6 rounded shadow-lg max-w-md mx-auto mt-8">
//       <h1 className="text-2xl font-semibold mb-4">
//         Request Your "Cuenta-Folio"
//       </h1>
//       <form>
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-gray-700">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             className="w-full border rounded px-3 py-2"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700">
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="w-full border rounded px-3 py-2"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="folio" className="block text-gray-700">
//             Folio Number (if available)
//           </label>
//           <input
//             type="text"
//             id="folio"
//             className="w-full border rounded px-3 py-2"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="request" className="block text-gray-700">
//             Describe your request
//           </label>
//           <textarea
//             id="request"
//             className="w-full border rounded px-3 py-2"
//             rows={4}
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="file" className="block text-gray-700">
//             Upload Supporting Documents
//           </label>
//           <input type="file" id="file" className="w-full" />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// // Information Section Component
// const InformationSection: React.FC = () => {
//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-semibold mb-4">Sección de Información</h2>
//       <p className="text-gray-700 mb-4">
//         La "Cuenta-Folio" es un número de identificación importante que se
//         utiliza para realizar pagos en línea de impuestos de propiedad en el
//         Municipio de Ciudad Acuña. Este número es esencial para acceder a su
//         cuenta de impuestos de propiedad y garantizar que sus pagos se registren
//         correctamente.
//       </p>
//       <p className="text-gray-700 mb-4">
//         Si no tiene un "Cuenta-Folio" aún, puede solicitar uno completando el
//         formulario en la sección principal de esta página. Una vez que haya
//         enviado su solicitud, procesaremos su solicitud y le proporcionaremos su
//         "Cuenta-Folio" para que pueda comenzar a realizar pagos en línea de
//         impuestos de propiedad de manera conveniente.
//       </p>
//       <p className="text-gray-700">
//         Para obtener más información o asistencia, no dude en ponerse en
//         contacto con nosotros en nuestra página de "Contáctenos".
//       </p>
//     </div>
//   );
// };

// // FAQ Section Component
// const FAQSection: React.FC = () => {
//   return (
//     <div className="bg-gray-100 p-6 mt-8 rounded shadow-lg max-w-md mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">Preguntas Frecuentes</h2>
//       {/* Add FAQ content here */}
//     </div>
//   );
// };

// // Footer Component
// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-200 p-4 text-center">
//       <div className="text-gray-600">
//         <ul className="flex justify-center space-x-4">
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/online-payments">Online Payments</a>
//           </li>
//           <li>
//             <a href="/contact-us">Contact Us</a>
//           </li>
//         </ul>
//         <p>&copy; {new Date().getFullYear()} Municipality of Ciudad Acuña</p>
//       </div>
//     </footer>
//   );
// };

// // Main Page Component
// const Solicita: React.FC = () => {
//   return (
//     <div>
//       <Header />
//       <div className="flex flex-wrap">
//         <RequestForm />
//         <InformationSection />
//       </div>
//       <FAQSection />
//       <Footer />
//     </div>
//   );
// };

// export default Solicita;

import { Link } from "@remix-run/react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { AcunaLogo } from "~/assets/acunalogo";

export default function SolicitaCuentaFolio() {
  return (
    <div className="bg-none">
      {/* NavHeader Section */}
      <header className="bg-white drop-shadow-md h-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/">
                <AcunaLogo className="w-24 mr-2" />
              </Link>
            </div>
            <nav className="flex space-x-4">
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                Inicio
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                Ventajas
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                Consulta
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                Ayuda
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="max-w-7xl mx-auto py-10 px-4 lg:px-8 flex flex-col lg:flex-row space-y-8 lg:space-y-0">
        {/* Left Part of Main Section */}
        <section className="lg:w-2/4 lg:pr-8">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">
            Solicita Tu Cuenta-Folio
          </h1>
          <p className="text-gray-600 mb-2">
            Llena este formulario para solicitar tu Cuenta-Folio.
          </p>
          <ul className="text-gray-600">
            <li className="mb-2">
              <span className="text-indigo-500">1.</span> Personal Information
            </li>
            <li className="mb-2">
              <span className="text-indigo-500">2.</span> Contact Information
            </li>
            <li className="mb-2">
              <span className="text-indigo-500">3.</span> Additional Details
            </li>
          </ul>
        </section>

        {/* Right Part of Main Section (Form) */}
        <section className="lg:w-2/4 bg-white shadow-md p-6 rounded-md">
          <div className="mx-auto w-full p-4">
            <form className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold">Personal Information</h2>
                <div className="flex flex-wrap -mx-2">
                  <div className="w-1/2 px-2">
                    <label for="nombre" className="text-gray-700">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                  </div>
                  <div className="w-1/2 px-2">
                    <label for="apellido_paterno" className="text-gray-700">
                      Apellido Paterno
                    </label>
                    <input
                      type="text"
                      id="apellido_paterno"
                      name="apellido_paterno"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                  </div>
                  <div className="w-1/2 px-2">
                    <label for="apellido_materno" className="text-gray-700">
                      Apellido Materno
                    </label>
                    <input
                      type="text"
                      id="apellido_materno"
                      name="apellido_materno"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                  </div>
                  <div className="w-1/2 px-2">
                    <label for="curp" className="text-gray-700">
                      CURP
                    </label>
                    <input
                      type="text"
                      id="curp"
                      name="curp"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-semibold">Address Information</h2>
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full px-2">
                    <label for="calle" className="text-gray-700">
                      Calle
                    </label>
                    <input
                      type="text"
                      id="calle"
                      name="calle"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                  </div>
                  <div className="w-1/2 px-2">
                    <label for="numero" className="text-gray-700">
                      Numero
                    </label>
                    <input
                      type="text"
                      id="numero"
                      name="numero"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                  </div>
                  <div className="w-1/2 px-2">
                    <label for="colonia" className="text-gray-700">
                      Colonia
                    </label>
                    <input
                      type="text"
                      id="colonia"
                      name="colonia"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                  </div>
                  <div className="w-1/2 px-2">
                    <label for="codigo_postal" className="text-gray-700">
                      Codigo Postal
                    </label>
                    <input
                      type="text"
                      id="codigo_postal"
                      name="codigo_postal"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-semibold">Contact Information</h2>
                <div className="flex flex-wrap -mx-2">
                  <div className="w-1/2 px-2">
                    <label for="email" className="text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                  </div>
                  <div className="w-1/2 px-2">
                    <label for="celular" className="text-gray-700">
                      Celular
                    </label>
                    <input
                      type="tel"
                      id="celular"
                      name="celular"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-indigo-500 text-white rounded-md py-2 px-4 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-neutral-200 text-center md:text-left text-sm text-neutral-500 py-12">
        {/* Container */}
        <div className="container mx-auto px-4">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Links Section */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Navegacion Rapida</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="hover:underline">
                    Consulta
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Ayuda
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                Contact Information
              </h4>
              <address className="not-italic">
                <p>123 Main St, Suite 400</p>
                <p>City, State 12345</p>s<p>(123) 456-7890</p>
                <p>info@example.com</p>
              </address>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Mantente Conectado</h4>
              <div className="flex space-x-4">
                {/* Replace '#' with your actual social media links */}
                <Link to="#" className="text-2xl hover:text-gray-400">
                  <FaFacebook />
                </Link>
                <Link to="#" className="text-2xl hover:text-gray-400">
                  <FaTwitter />
                </Link>
                <Link to="#" className="text-2xl hover:text-gray-400">
                  <FaYoutube />
                </Link>
              </div>
            </div>

            {/* Copyright */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <p>
                &copy; 2023 Presidencia Municipal de Acuña. Derechos Reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
