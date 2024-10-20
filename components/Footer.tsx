"use client"
import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia, footerItems } from '@/data';
import { AnimatedModalDemo } from './ui/Modal';
import { eng } from '@/locales/en'; // Update this path
import { fr } from '@/locales/fr'; // Update this path
import { useLanguage } from '@/app/languageContext'; // Update this path

const Footer = () => {
  const { language } = useLanguage();

  const translations = language === 'en' ? eng : fr;

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          {translations.footerItems[0].heading}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {translations.footerItems[0].description}
        </p>
        <AnimatedModalDemo />
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          {translations.footerItems[0].copyright}
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-5">
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
      </div>
    </footer>
  );
}

export default Footer;
