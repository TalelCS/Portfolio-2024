"use client"
import React from "react";
import Timeline from "./ui/Timeline";
import { eng } from '@/locales/en';
import { fr } from '@/locales/fr';
import { useLanguage } from '@/app/languageContext';

export function TimelineDemo() {
  const { language } = useLanguage();

  const translations = language === 'en' ? eng : fr;

  const data = translations.WorkExperienceData;

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default TimelineDemo;
