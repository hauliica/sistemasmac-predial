import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { AcunaLogo } from "~/assets/acunalogo";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { PresidenciaHero } from "~/assets/PresidenciaVector";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix!",
    },
  ];
};

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex flex-col min-h-screen">
      <header className="flex items-center sticky top-0 backdrop-blur-md bg-opacity-40 justify-between py-2 md:py-4 px-6 z-20 bg-white shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <AcunaLogo className="w-36 h-10 object-cover" />
            </div>
            <div className="hidden md:flex md:items-center md:justify-end md:w-1/2">
              <nav className="flex items-center justify-between gap-12 text-base text-darkslategray font-poppins">
                <Link
                  to="/"
                  className="no-underline text-current leading-6 font-medium"
                >
                  Inicio
                </Link>
                <Link
                  to="/consulta"
                  className="no-underline text-current leading-6 font-medium"
                >
                  Consulta
                </Link>
                <Link
                  to="/ayuda"
                  className="no-underline text-current leading-6 font-medium"
                >
                  Ayuda
                </Link>
                <Link
                  to="/contacto"
                  className="no-underline text-current leading-6 font-medium"
                >
                  Contacto
                </Link>
              </nav>
            </div>
            <div className="md:hidden flex items-center justify-end w-1/2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-3 py-2 border rounded"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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
          </div>
          {isOpen && (
            <div className="md:hidden w-full">
              <nav className="flex flex-col items-start justify-start gap-4 text-base text-darkslategray font-poppins">
                <Link
                  to="/"
                  className="no-underline text-current leading-6 font-medium"
                >
                  Inicio
                </Link>
                <Link
                  to="/consulta"
                  className="no-underline text-current leading-6 font-medium"
                >
                  Consulta
                </Link>
                <Link
                  to="/ayuda"
                  className="no-underline text-current leading-6 font-medium"
                >
                  Ayuda
                </Link>
                <Link
                  to="/contacto"
                  className="no-underline text-current leading-6 font-medium"
                >
                  Contacto
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center p-4 md:p-8 z-0">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center h-full">
          <div className="w-full md:w-1/2 text-center md:text-left p-4 lg:-mt-40">
            <h1 className="text-5xl md:text-6xl text-slate-100 mix-blend-exclusion font-bold tracking-tighter mb-8 md:leading-tight">
              Bienvenido al Portal de Impuesto Predial de Acuña
            </h1>
            <p className="text-md md:text-lg px-2 leading-none text-zinc-300 text-opacity-80 tracking-tighter mb-8">
              Pagando tus impuestos, estás construyendo un mejor mañana. Te
              Ofrecemos una solución sencilla y segura para mantener tus pagos
              de impuesto predial al día. No más filas, no más papel.
            </p>
            <form
              action="#"
              method="post"
              className="flex justify-center md:justify-start"
            >
              <label htmlFor="idInput" className="sr-only">
                Enter ID
              </label>
              <input
                id="idInput"
                type="text"
                placeholder="Enter your ID"
                className="p-2 rounded-md"
                aria-required="true"
              />
              <button
                type="submit"
                className="ml-2 p-2 rounded-md bg-blue-600 text-white"
              >
                CTA
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 p-4 flex justify-center">
            <PresidenciaHero className="max-h-[300px] md:max-h-full" />
          </div>
        </div>
      </section>

      {/* "¿Por qué es importante pagar el impuesto predial?" Section */}
      <section className="bg-gray-100 bg-blend-luminosity bg-opacity-25 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              ¿Por qué es importante pagar el impuesto predial?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto">
              Pagar tus impuestos prediales no solo es una responsabilidad, sino
              que también contribuye al bienestar de tu comunidad.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center justify-center max-w-md p-8 border rounded-lg bg-white shadow-md">
              <svg
                className="h-12 w-12 mb-4 text-blue-500"
                // Your SVG content here, example used for representation
                aria-hidden="true"
              />
              <h3 className="text-lg font-medium text-gray-900">
                Desarrollo Local
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Tu contribución ayuda al desarrollo de infraestructuras locales
                como escuelas, parques y hospitales.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center max-w-md p-8 border rounded-lg bg-white shadow-md">
              <svg
                className="h-12 w-12 mb-4 text-blue-500"
                // Your SVG content here, example used for representation
                aria-hidden="true"
              />
              <h3 className="text-lg font-medium text-gray-900">
                Servicios Públicos
              </h3>
              <p className="mt-2 text-base text-gray-600">
                El pago del impuesto predial garantiza la disponibilidad y
                mantenimiento de servicios públicos esenciales.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center max-w-md p-8 border rounded-lg bg-white shadow-md">
              <svg
                className="h-12 w-12 mb-4 text-blue-500"
                // Your SVG content here, example used for representation
                aria-hidden="true"
              />
              <h3 className="text-lg font-medium text-gray-900">
                Mejora del Valor de la Propiedad
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Un entorno bien mantenido y desarrollado puede aumentar el valor
                de tu propiedad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* "Ventajas de Pagar en Línea" Section with Icons */}
      {/*<section className="bg-gray-100  py-12">*/}
      {/*  <div className="container mx-auto px-4 sm:px-6 lg:px-8">*/}
      {/*    <div className="text-center mb-8">*/}
      {/*      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">*/}
      {/*        Ventajas de pagar en línea*/}
      {/*      </h2>*/}
      {/*      <p className="mt-4 text-xl text-gray-600">*/}
      {/*        Descubre por qué es mejor pagar tus impuestos en línea.*/}
      {/*      </p>*/}
      {/*    </div>*/}

      {/*    <div className="flex flex-wrap -m-4 text-center">*/}
      {/*      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">*/}
      {/*        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out">*/}
      {/*          <svg*/}
      {/*            className="text-indigo-500 w-12 h-12 mb-3 inline-block"*/}
      {/*            fill="currentColor"*/}
      {/*            viewBox="0 0 20 20"*/}
      {/*          >*/}
      {/*            /!* SVG content *!/*/}
      {/*          </svg>*/}
      {/*          <h2 className="title-font font-medium text-3xl text-gray-900">*/}
      {/*            Seguro*/}
      {/*          </h2>*/}
      {/*          <p className="leading-relaxed">*/}
      {/*            Transacciones cifradas para tu seguridad.*/}
      {/*          </p>*/}
      {/*        </div>*/}
      {/*      </div>*/}

      {/*      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">*/}
      {/*        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out">*/}
      {/*          <svg*/}
      {/*            className="text-indigo-500 w-12 h-12 mb-3 inline-block"*/}
      {/*            fill="currentColor"*/}
      {/*            viewBox="0 0 20 20"*/}
      {/*          >*/}
      {/*            /!* SVG content *!/*/}
      {/*          </svg>*/}
      {/*          <h2 className="title-font font-medium text-3xl text-gray-900">*/}
      {/*            Rápido*/}
      {/*          </h2>*/}
      {/*          <p className="leading-relaxed">Paga en segundos sin filas.</p>*/}
      {/*        </div>*/}
      {/*      </div>*/}

      {/*      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">*/}
      {/*        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out">*/}
      {/*          <svg*/}
      {/*            className="text-indigo-500 w-12 h-12 mb-3 inline-block"*/}
      {/*            fill="currentColor"*/}
      {/*            viewBox="0 0 20 20"*/}
      {/*          >*/}
      {/*            /!* SVG content *!/*/}
      {/*          </svg>*/}
      {/*          <h2 className="title-font font-medium text-3xl text-gray-900">*/}
      {/*            Conveniente*/}
      {/*          </h2>*/}
      {/*          <p className="leading-relaxed">Paga desde cualquier lugar.</p>*/}
      {/*        </div>*/}
      {/*      </div>*/}

      {/*      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">*/}
      {/*        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out">*/}
      {/*          <svg*/}
      {/*            className="text-indigo-500 w-12 h-12 mb-3 inline-block"*/}
      {/*            fill="currentColor"*/}
      {/*            viewBox="0 0 20 20"*/}
      {/*          >*/}
      {/*            /!* SVG content *!/*/}
      {/*          </svg>*/}
      {/*          <h2 className="title-font font-medium text-3xl text-gray-900">*/}
      {/*            24/7*/}
      {/*          </h2>*/}
      {/*          <p className="leading-relaxed">*/}
      {/*            Servicio disponible todo el tiempo.*/}
      {/*          </p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    <div className="text-center mt-8">*/}
      {/*      <Link*/}
      {/*        to="/get-started"*/}
      {/*        className="bg-indigo-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-indigo-700 transition-colors duration-200 ease-in-out"*/}
      {/*      >*/}
      {/*        Comienza Ahora*/}
      {/*      </Link>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between p-8 bg-gray-100">
        {/* Text Content */}
        <div className="lg:w-1/2 p-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Ventajas de pagar en línea
          </h2>
          <p className="text-gray-700 mb-4">
            Realiza tus pagos de impuestos de manera rápida, sencilla y segura.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Seguridad garantizada</li>
            <li>Pago instantáneo</li>
            <li>Acceso 24/7</li>
          </ul>
          <Link to="/learn-more" className="text-blue-500 hover:underline">
            Aprender más
          </Link>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 p-4">
          <img
            src="/path/to/your/image.jpg"
            alt="Advantages of Paying Online"
            className="w-full h-auto shadow-lg rounded"
          />
        </div>
      </section>

      {/* Seccion Call to Action final con un solo input para la Cuenta-Folio. para promover el pago. */}
      <section className="bg-gradient-to-r from-[#F09819] to-[#FF512F] text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            {/* <!-- Text content --> */}
            <div className="w-full sm:w-6/12 lg:w-5/12 mb-8 sm:mb-0">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Tu Pago de Impuestos en un Clic
              </h2>
              <p className="text-lg lg:text-xl mt-4">
                Simplifica tu vida con nuestra aplicación segura y eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ con preguntas y respuestas comunes. */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            ¿Tienes Preguntas? ¡Nosotros Tenemos Respuestas!
          </h2>
          <div className="flex flex-wrap -mx-4">
            {/* FAQ Item */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out">
                <h3 className="text-xl font-semibold mb-4">
                  What is the tax rate?
                </h3>
                <p className="text-base leading-6">
                  The tax rate varies depending on your location and income
                  level. You can use our calculator for a personalized estimate.
                </p>
              </div>
            </div>
            {/* FAQ Item */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out">
                <h3 className="text-xl font-semibold mb-4">
                  How secure is my data?
                </h3>
                <p className="text-base leading-6">
                  We use state-of-the-art encryption and security measures to
                  keep your data safe.
                </p>
              </div>
            </div>
            {/* FAQ Item */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out">
                <h3 className="text-xl font-semibold mb-4">
                  How do I apply for a refund?
                </h3>
                <p className="text-base leading-6">
                  You can apply for a refund through the app. Head over to the
                  "Refunds" section and follow the instructions.
                </p>
              </div>
            </div>
            {/* FAQ Item */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out">
                <h3 className="text-xl font-semibold mb-4">
                  Can I use this for business?
                </h3>
                <p className="text-base leading-6">
                  Absolutely, we offer both personal and business tax solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/more-faqs"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-200 ease-in-out"
            >
              Ver Mas
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </main>
  );
}
