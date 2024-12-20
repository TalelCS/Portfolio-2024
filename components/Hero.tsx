"use client"
import React from "react";
import { FaLocationArrow, FaDownload } from 'react-icons/fa';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { socialMedia } from '@/data';
import { eng } from '@/locales/en';
import { fr } from '@/locales/fr';
import { useLanguage } from '@/app/languageContext';


const Hero = () => {
  const { language } = useLanguage();
  const translations = language === 'en' ? eng : fr;

  return (
    <div className='pb-20 pt-36 relative'>
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center relative my-20 z-10 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] mx-auto">

        <div className="relative w-32 h-32 md:w-80 md:h-80 mb-6 md:mb-28 md:ml-10 flex-shrink-0 md:mr-8 order-1 md:order-2">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-transparent rounded-full blur-xl opacity-70 z-[-1]" />

          <img
            src="/memoji-waving.PNG"
            alt="Memoji of Talel waving"
            className="w-full h-full object-contain"
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)'
            }}
          />
        </div>

        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left mb-8 md:mb-0 md:mr-8 order-2 md:order-1">
          <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80 mb-2">
            {translations.HeroItems[0].firstText}
          </h2>
          <TextGenerateEffect
            className="text-[32px] md:text-5xl lg:text-6xl"
            words={translations.HeroItems[0].secondText}
          />
          <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            {translations.HeroItems[0].thirdText}
          </p>

          <div className="flex items-center md:gap-3 gap-4 mt-3 md:mt-4">
            {socialMedia.map((profile) => (
              <a 
                key={profile.id} 
                href={profile.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                  <img src={profile.img} width={20} height={20} />
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start mt-4">
            <a href="/Talel_Galai_Resume_2024.pdf" download="Talel_Galai_Resume_2024.pdf">
              <MagicButton
                title={translations.HeroItems[0].firstButtonText}
                icon={<FaDownload />}
                position="right"
              />
            </a>

            <a href="#projects">
              <MagicButton
                title={translations.HeroItems[0].secondButtonText}
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
