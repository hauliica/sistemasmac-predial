// import { Form, useNavigate } from "@remix-run/react";
// import { useState } from "react";

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

// export default function Solicita() {
//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//           <div className="max-w-md mx-auto">
//             <div>
//               <img src="/logo.svg" className="h-7 sm:h-8" />
//             </div>
//             <div className="divide-y divide-gray-200">
//               <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                 <p>An advanced online form for managing your property taxes.</p>
//                 <form className="space-y-6">
//                   ... // your form fields here
//                   <button
//                     type="submit"
//                     className="mt-3 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     Register
//                   </button>
//                 </form>
//               </div>
//               <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
//                 <p>
//                   Or{" "}
//                   <a href="#" className="text-indigo-600 hover:text-indigo-500">
//                     {" "}
//                     start your 14-days trial{" "}
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/routes/cuenta-folio-request.tsx

// import * as React from "react";
// import { Link } from "@remix-run/react";

// // Header Component
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

// import { Form, useActionData, Link } from "@remix-run/react";
// import { useState } from "react";

// export default function RequestFolioPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     propertyAddress: "",
//   });

//   const actionData = useActionData();

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setFormData((data) => ({
//       ...data,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // submit form data
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header */}
//       <header className="bg-blue-500 text-white">
//         <div className="container mx-auto p-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Portal de Impuestos de Acuña</h1>

//           <nav className="space-x-4 text-sm flex flex-col md:flex-row md:space-x-4">
//             <Link className="hover:text-gray-200" to="/">
//               Inicio
//             </Link>
//             <Link className="hover:text-gray-200" to="/pagos">
//               Pagos
//             </Link>
//             <Link className="hover:text-gray-200" to="/solicitud">
//               Solicitar Folio
//             </Link>
//           </nav>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 container mx-auto p-4 flex flex-wrap">
//         {/* Instructions */}
//         <div className="w-full lg:w-1/2 pr-4">
//           <h2 className="text-2xl font-bold mb-4">Solicita tu Cuenta-Folio</h2>
//           <p className="text-gray-700 mb-4">
//             Si no conoces tu Cuenta-Folio, puedes solicitarlo aquí. El Folio es
//             necesario para poder realizar pagos en línea.
//           </p>

//           <p className="text-gray-700 mb-4">
//             Por favor ingresa tu información a continuación y nos pondremos en
//             contacto contigo.
//           </p>
//         </div>

//         {/* Request Form */}
//         <Form className="w-full lg:w-1/2" onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               className="text-gray-700 font-bold mb-2 block"
//               htmlFor="name"
//             >
//               Nombre
//             </label>

//             <input
//               type="text"
//               name="name"
//               id="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="w-full border border-gray-400 p-2 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               className="text-gray-700 font-bold mb-2 block"
//               htmlFor="email"
//             >
//               Correo Electrónico
//             </label>

//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full border border-gray-400 p-2 rounded"
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               className="text-gray-700 font-bold mb-2 block"
//               htmlFor="propertyAddress"
//             >
//               Dirección de la Propiedad
//             </label>

//             <input
//               type="text"
//               name="propertyAddress"
//               id="propertyAddress"
//               value={formData.propertyAddress}
//               onChange={handleInputChange}
//               className="w-full border border-gray-400 p-2 rounded"
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//           >
//             Enviar Solicitud
//           </button>
//         </Form>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-100 text-center py-4">
//         <p className="text-sm text-gray-600">
//           &copy; Municipalidad de Acuña 2023
//           <Link className="text-blue-500 hover:underline" to="/contacto">
//             Contáctanos
//           </Link>
//         </p>
//       </footer>
//     </div>
//   );
// }

import { Link } from "@remix-run/react";
import { AcunaLogo } from "~/assets/acunalogo";

export default function SolicitaCuentaFolio() {
  return (
    <div className="bg-gray-100">
      {/* NavHeader Section */}
      <header className="bg-white shadow-md py-4 px-6">
        <nav className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold text-indigo-500">
            <AcunaLogo className="h-full"/>
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-800 hover:text-indigo-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-800 hover:text-indigo-500">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-indigo-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <main className="max-w-7xl mx-auto py-10 px-4 lg:px-8 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0">
        {/* Left Part of Main Section */}
        <section className="lg:w-2/3 lg:pr-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Solicita Tu Cuenta-Folio
          </h1>
          <p className="text-gray-600 mb-2">
            Complete the following form to request your Cuenta-Folio:
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
        <section className="lg:w-1/3 bg-white shadow-md p-6 rounded-lg">
          <form className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label for="email" className="text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label for="phone" className="text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-500 text-white rounded-md py-2 px-4 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              Submit
            </button>
          </form>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-12 justify-end">
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center space-y-4">
          <p className="text-gray-500">
            &copy; 2023 Your Company. All Rights Reserved.
          </p>
          <nav className="flex space-x-6">
            <Link
              to="/privacy-policy"
              className="text-gray-500 hover:text-indigo-500 flex-"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-500 hover:text-indigo-500"
            >
              Terms of Service
            </Link>
            <Link
              to="/contact-us"
              className="text-gray-500 hover:text-indigo-500"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
