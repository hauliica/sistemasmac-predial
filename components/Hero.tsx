import React from 'react';
import { SVGProps } from 'react';
import { PresidenciaHero } from '@/components/vectors/presidenciaHero';
import {Container} from "@/components/Container";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}



const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <div className="z-10 h-screen flex items-center">
      <div className="container lg:grid lg:grid-cols-12 lg:gap-x-8 mx-auto px-4 md:px-0">
        <div className="flex flex-col justify-center lg:col-span-5 md:pr-4">
          <h1 className="mb-4 pb-8 text-white text-4xl font-bold md:text-6xl lg:leading-snug">
            {title}
          </h1>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
        <div className="relative lg:col-span-7 justify-center md:mt-0 md:pl-32">
          <PresidenciaHero className="h-auto max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
