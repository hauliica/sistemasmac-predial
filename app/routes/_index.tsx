import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { AcunaLogo } from "~/assets/acunalogo";
import {
  FaArrowUp,
  FaFacebook,
  FaLock,
  FaServer,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";
import { PresidenciaHero } from "~/assets/PresidenciaVector";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { VentajasSVG } from "~/assets/Ventajas";
import HeroSection from "~/components/Hero";

const features = [
  {
    name: "Pago en línea rápido y seguro",
    description:
      "Paga tus impuestos de propiedad de manera rápida y segura desde la comodidad de tu hogar. Evita largas filas y tiempos de espera.",
    icon: FaArrowUp,
  },
  {
    name: "Certificados SSL",
    description:
      "Tus transacciones en línea están protegidas con certificados SSL avanzados para garantizar la seguridad de tus datos.",
    icon: FaLock,
  },
  {
    name: "Respaldo de bases de datos",
    description:
      "Tus datos y registros están respaldados de manera segura para garantizar la integridad de la información.",
    icon: FaServer,
  },
];

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix!",
    },
  ];
};

const questions = [
  {
    title: "¿Qué es el impuesto predial y por qué debo pagarlo?",
    content:
      "El impuesto predial es un gravamen que se aplica sobre la propiedad de bienes inmuebles. Los fondos recaudados son utilizados para financiar diversos servicios y obras públicas en el municipio de Acuña. El pago puntual de este impuesto es crucial para el desarrollo y mantenimiento de la localidad.",
  },
  {
    title: "¿Cómo puedo pagar mi impuesto predial en línea?",
    content:
      "Para pagar en línea, ingresa tu Cuenta-Folio en el campo correspondiente en la sección del Hero de nuestra página principal. Luego, sigue los pasos para completar el pago mediante nuestra segura pasarela de pagos.",
  },
  {
    title: "¿Qué es un Cuenta-Folio y dónde lo encuentro?",
    content:
      "El Cuenta-Folio es un número único asignado a tu propiedad que sirve para identificarla en el sistema. Puedes encontrar este número en tus recibos anteriores de impuesto predial o en la oficina del municipio.",
  },
  {
    title: "¿Qué hago si no tengo un Cuenta-Folio?",
    content:
      'Si no tienes un Cuenta-Folio, puedes solicitarlo llenando un formulario en nuestra página de "Solicitud de Cuenta-Folio". Una vez enviado el formulario, recibirás tu Cuenta-Folio a través del método que elijas: Email o SMS.',
  },
  {
    title: "¿Es seguro pagar en línea?",
    content:
      "Sí, la seguridad es una de nuestras principales preocupaciones. Utilizamos encriptación SSL/TLS para asegurar que tus datos y transacciones estén protegidos.",
  },
  {
    title: "¿Puedo pagar en efectivo o en una tienda física?",
    content:
      "Sí, ofrecemos la opción de imprimir un formato con un código de barras que podrás utilizar para pagar en tiendas OXXO.",
  },
];

export default function Index() {
  return (
    <main className="flex flex-col">
      <header className="bg-white drop-shadow-md h-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex min-w-full justify-center items-center lg:justify-between h-16">
            <div className="flex items-center">
              <AcunaLogo className="w-24 mr-2" />
            </div>
            <nav className="hidden lg:flex space-x-4">
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

      <section className="bg-gray-100 hero-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid h-full grid-cols-1 lg:grid-cols-2 gap-8 grid-rows-1">
            <div className="mt-10 lg:-mt-4 text-center lg:w-4/5 lg:text-left flex flex-col justify-center">
              <span className="mb-2 font-semibold text-amber-500">
                Estamos orgullosos de presentar
              </span>
              <h2 className="text-5xl font-black lg:font-bold text-gray-800 mb-6 lg:text-5xl lg:mb-8">
                Un nuevo método para pagar tu predial
              </h2>
              <p className="text-gray-600 lg:w-5/6 mb-8 text-md lg:text-base lg:leading-tight">
                Te presentamos un sistema simple y eficiente que te permitirá
                pagar tu impuesto predial en línea, sin tener que salir de casa.
                Aprovecha esta nueva modalidad y evita filas y tiempos de
                espera.
              </p>
              <div className="flex self-center lg:self-start space-x-4">
                <Link
                  to="#"
                  className="py-4 shadow-md shadow-amber-500 transition-all duration-100 px-8 md:px-4 md:py-2 bg-amber-500 text-amber-100 font-bold text-lg md:text-md rounded-lg hover:bg-amber-600"
                >
                  ¡Paga Ahora!
                </Link>
              </div>
            </div>
            <div className="">
              <PresidenciaHero className="h-full object-cover presHeroMobile" />
            </div>
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
      <div className="overflow-hidden bg-white shadow-md py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base text-[#ff9836] font-semibold leading-7">
                  Ventajas de Pagar en Línea
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-800 sm:text-4">
                  Una forma más conveniente
                </p>
                <p className="mt-6 text-lg leading-6 text-gray-600">
                  Pagar tus impuestos de propiedad en línea en la Ciudad de
                  Acuña tiene ventajas significativas para ti y tu comunidad.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-neutral-800">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-[#ff9836]"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline text-gray-600">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <VentajasSVG className="w-[48rem] max-w-none sm:w-full md:-ml-4 lg:-ml-0" />
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#F09819] to-[#FF512F] text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            {/* <!-- Text content --> */}
            <div className="w-full sm:w-6/12 lg:w-5/12 mb-8 sm:mb-0">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Comienza Ahora con Tu Pago de Impuestos
              </h2>
              <p className="text-lg lg:text-md tracking-tight lg:leading-tight invi mt-8">
                Honestidad, transparencia y eficiencia, son las palabras que
                mejor describen nuestro servicio de Pago de Impuesto Predial en
                Línea. Te invitamos a formar parte de una Ciudad de Acuña más
                digital y eco-amigable, simplificando tu vida con nuestro
                servicio seguro y eficiente.
              </p>
            </div>

            {/* <!-- Input form --> */}
            <div className="w-full sm:w-6/12 lg:w-5/12 text-center sm:text-left">
              <form className="mt-8 sm:mt-0 bg-white shadow-lg shadow-amber-800 p-6 rounded">
                <div className="mb-5">
                  <label
                    htmlFor="cuentaClave"
                    className="font-semibold text-gray-700 block mb-2"
                  >
                    Cuenta Clave
                  </label>
                  <input
                    type="text"
                    id="cuentaClave"
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Ingresa tu cuenta clave"
                  />
                </div>
                <button
                  className="bg-[#ffa227] hover:bg-[#ff9735] transition-all shadow-transparent hover:-translate-y-0.5 hover:shadow-sm text-amber-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                >
                  Procede con el Pago
                </button>
                <p className="text-sm text-gray-700 mt-4">
                  ¿Desconoces tu cuenta clave?
                  <Link to="#" className="underline text-amber-600">
                    Solicítala aquí
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ con preguntas y respuestas comunes. */}
      <section className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Preguntas frecuentes
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Aquí encontrarás algunas respuestas a preguntas comunes sobre el
              Pago en Línea del Impuesto Predial.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">
            {questions.map((question, index) => (
              <div
                key={index}
                className="relative rounded-lg bg-gray-100 p-5 pt-8"
              >
                <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FF512F] text-white">
                  <AiOutlineQuestionCircle className="h-5 w-5" />
                </span>
                <h3 className="mb-3 text-lg font-semibold text-zinc-900 md:text-xl">
                  {question.title}
                </h3>
                <p className="text-gray-500">{question.content}</p>
              </div>
            ))}
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
