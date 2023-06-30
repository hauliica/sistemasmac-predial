import React from 'react';
import { SVGProps } from 'react';



const CircleScatter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="visual"
    viewBox="0 0 960 540"
    width={960}
    height={540}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect x={0} y={0} width={960} height={540} fill="none" />
    <g fill="#830c0c">
      <circle r={116} cx={581} cy={258} />
      <circle r={8} cx={308} cy={341} />
      <circle r={30} cx={95} cy={472} />
      <circle r={52} cx={865} cy={132} />
      <circle r={54} cx={190} cy={124} />
      <circle r={103} cx={624} cy={11} />
      <circle r={102} cx={877} cy={500} />
      <circle r={65} cx={638} cy={517} />
    </g>
  </svg>
);

const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-xl bg-gray-100 p-6 md:w-1/3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-4 text-white">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <h3 className="mt-4 text-xl font-medium text-gray-700">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: 'Pagos Seguros',
      description:
        'Utilizamos las mejores medidas de seguridad para garantizar que sus datos y dinero estén seguros.',
    },
    {
      title: 'Interfaz de Usuario Amigable',
      description:
        'Nuestra interfaz fácil de usar facilita el pago de sus impuestos en línea.',
    },
    {
      title: 'Soporte 24/7',
      description:
        '¿Algún problema o consulta? Nuestro equipo de soporte está disponible 24/7.',
    },
  ];

  return (
    <div className="flex flex-wrap justify-around gap-4 bg-white px-8 py-12 magicpattern-features">
      {features.map((feature, index) => (
        <Feature
          key={index}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default Features;
