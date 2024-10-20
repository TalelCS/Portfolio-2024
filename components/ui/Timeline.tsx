"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { LayoutGrid } from "../ui/layout-grid";
import { useLanguage } from '@/app/languageContext';

interface Card {
  id: number;
  contentTitle: string;
  contentParagraph: string;
  className: string;
  thumbnail: string;
}

interface Content {
  text : string;
}

interface TimelineEntry {
  title: string;
  date: string;
  position: string;
  logo: string;
  contents: Content[];
  cards: Card[];
}

const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const { language } = useLanguage();
  const sectionTitle = () => {
    if (language === 'en') {
      return (
        <>
          My <span className='text-purple'>Work Experience</span>
        </>
      );
    } else {
      return (
        <>
          Mon <span className='text-purple'>Expérience Professionnelle</span>
        </>
      );
    }
  };

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h1 className="heading">
          {sectionTitle()}
        </h1>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-white flex items-center justify-center">
                <img
                  src={item.logo}
                  alt="Company Logo"
                  className="h-10 w-10"
                />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.date}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <CardContainer className="w-full flex-1">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-100 dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border" >
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {item.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm md:text-base text-neutral-400 dark:text-neutral-500 mb-2"
                  >
                    {item.position}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-full mt-2"
                  >
                    {item.contents.map((element , index) => (
                      <div key={index}>
                        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                          {element.text}
                        </p>
                    </div>
                    ))}
                  </CardItem>
                  <div className="flex justify-between items-center">
                    <CardItem translateZ="100" className="w-full mt-4 pointer-events-auto">
                      <div className="h-[70vh] py-5 px-5 w-full">
                        <LayoutGrid cards={item.cards} />
                      </div>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
