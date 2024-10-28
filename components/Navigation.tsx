"use client"
import { FloatingNav } from "@/components/ui/FloatingNav";
import { eng } from '@/locales/en';
import { fr } from '@/locales/fr';
import { useLanguage } from '@/app/languageContext';

const Navigation = () => {
    const { language } = useLanguage();
    const translations = language === 'en' ? eng : fr;
    
    return (
        <FloatingNav
        navItems={translations.navItems}
        />
    );
}

export default Navigation;