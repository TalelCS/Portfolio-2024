"use client";

import React from "react";

import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { eng } from '@/locales/en';
import { fr } from '@/locales/fr';
import { useLanguage } from '@/app/languageContext';

const Clients = () => {
  const { language } = useLanguage();

  const translations = language === 'en' ? eng : fr;

  const sectionTitle = () => {
    if (language === 'en') {
      return (
        <>
          Kind words from <span className="text-purple"> kind people</span>
        </>
      );
    } else {
      return (
        <>
          Des mots gentils de <span className="text-purple">personnes bienveillantes</span>
        </>
      );
    }
  };

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        {sectionTitle()}
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={translations.testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;