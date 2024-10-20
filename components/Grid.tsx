"use client"
import { eng } from '@/locales/en';
import { fr } from '@/locales/fr';
import { useLanguage } from '@/app/languageContext';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  const { language } = useLanguage();

  const translations = language === 'en' ? eng : fr;

  return (
    <section id="about">
        <BentoGrid className="w-full py-20">
            {translations.gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) =>(
                <BentoGridItem
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid