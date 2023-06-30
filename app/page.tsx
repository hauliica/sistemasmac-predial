'use client';
import React from 'react';
import NavMenu from '@/components/Header';
import HeroSection from '@/components/Hero';
import HowItsDone from '@/components/HowItsDone';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import Header from '@/components/Header';

const NavLinks = [
  {
    name: 'Inicio',
    href: '#inicio',
  },
  {
    name: 'Consulta',
    href: '#consulta',
  },
  {
    name: 'Contacto',
    href: '#contacto',
  },
  {
    name: 'Ayuda',
    href: '#ayuda',
  },
];

const StepList = [
  {
    title: 'Ingrese su Cuenta-Folio',
    description:
      'Ingrese su Cuenta-Folio único en nuestro formulario seguro para acceder a su cuenta personal de impuestos',
  },
  {
    title: 'Revise el Monto a Pagar',
    description:
      'Al ingresar su cuenta-folio, se mostrarán sus obligaciones fiscales actuales. Proporcionamos un desglose claro de su cálculo de impuestos para garantizar la transparencia. Revise los detalles cuidadosamente.',
  },
  {
    title: 'Complete su Pago',
    description:
      'Elija su método de pago preferido entre nuestras opciones, que incluyen tarjeta de crédito/débito. Siga las indicaciones para ingresar de forma segura su información de pago y confirme su pago.',
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      {/*<div className="py-20  sm:py-32 lg:pb-32 xl:pb-36">*/}
      {/*  <Container className="">*/}
      {/*    <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">*/}
      {/*      <div className="relative z-10 mx-auto max-w-2xl lg:col-span-5 lg:max-w-none lg:pt-6 xl:col-span-5">*/}
      {/*        <h1 className="text-5xl font-bold leading-tight text-gray-900">*/}
      {/*          Paga Tu Impuesto Predial*/}
      {/*          <span className="font-black text-emerald-900"> En Linea</span>*/}
      {/*        </h1>*/}
      {/*        <p className="text-md mt-6 break-words pr-8 font-sans font-normal capitalize text-gray-600">*/}
      {/*          Con nuestro servicio en línea fácil de usar, puedes pagar tus*/}
      {/*          impuestos rápida y seguramente con solo unos pocos clics. Con*/}
      {/*          SisMac, puedes pagar tus impuestos fácilmente y de forma segura*/}
      {/*          en línea.*/}
      {/*        </p>*/}
      {/*        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">*/}
      {/*          <Button variant="solid">*/}
      {/*            <span className="">Paga Ahora!</span>*/}
      {/*          </Button>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className="relative mt-20 sm:mt-20 lg:col-span-7 lg:row-span-2 lg:mt-0 xl:col-span-7">*/}
      {/*        <div className="-mx-4 h-[1026px] px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">*/}
      {/*          <PresidenciaHero className="mx-auto max-w-[470px]" />*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </Container>*/}
      {/*</div>*/}
      <HowItsDone title="Así es cómo funciona" steps={StepList} />
      <section id="" className="z-10 py-20 sm:py-32">
        <Features />
      </section>
      <section>
        <CTA />
      </section>
      <FAQ />-
      <Footer />
    </>
  );
}
