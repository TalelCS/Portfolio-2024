'use client'
import { cn } from "@/lib/utils";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from 'react-icons/io5'
import dynamic from 'next/dynamic';
const BackgroundGradientAnimation = dynamic(() => import('./GradientBg').then((mod) => mod.BackgroundGradientAnimation), { ssr: false });


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img, 
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('talelgalai@gmail.com');
      setCopied(true);
    }
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
      {id === 1 ? (
    <div className="p-5 lg:p-10 h-full flex flex-col justify-center relative">
      <h2 className="font-bold text-xl lg:text-3xl text-white mb-4">
        About Me
      </h2>
      <p className="font-sans text-sm lg:text-lg text-[#c1c2d3]">
        I am a passionate web developer with experience in building scalable web
        applications using modern technologies like React.js, Next.js, and Node.js. 
        I love working on both front-end and back-end projects, continuously 
        improving my skills and keeping up with the latest trends in the tech 
        industry. In my free time, I enjoy learning new frameworks and contributing 
        to open-source projects.
      </p>

      {/* Floating Memoji Image */}
      <div className="absolute top-0 right-0">
        <img
          src='/Memoji.png'
          alt="Memoji"
          className="w-24 md:w-28 lg:w-32 rounded-full border-4 border-[#ffffff]/[0.1] shadow-xl"
          style={{
            transform: 'rotate(-5deg)', // Adds a slight tilt for a dynamic effect
            boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)' // Subtle 3D shadow effect
          }}
        />
      </div>
    </div>
  ) : (
          <>
            {img && (
              <div className="w-full h-full absolute">
                <img
                  src={img}
                  alt={img}
                  className={cn(imgClassName, 'object-cover, object-center')}
                />
              </div>
            )}
            <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
              {spareImg && (
                <img
                  src={spareImg}
                  alt={spareImg}
                  className={'object-cover, object-center w-full h-full'}
                />
              )}
            </div>
            {id === 6 && (
              <BackgroundGradientAnimation />
            )}

            <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
              <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                {description}
              </div>
              <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                {title}
              </div>

              {id === 2 && <GlobeDemo />}

              {id === 3 && (
                <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                  <div className="flex flex-col gap-3 lg:gap-8">
                    {['React.js', 'Next.js', 'Python'].map((item) => (
                      <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                        {item}
                      </span>
                    ))}
                    <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                  </div>
                  <div className="flex flex-col gap-3 lg:gap-8">
                    <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                    {['Express.js', 'MongoDB', 'Docker'].map((item) => (
                      <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {id === 6 && (
                <div className="mt-5 relative">
                  <div className="absolute -bottom-5 right-0">
                  </div>
                  <MagicButton
                    title={copied ? 'Email copied' : 'Copy my Email'}
                    icon={<IoCopyOutline />}
                    position="left"
                    otherClasses="!bg-[#161a31]"
                    handelClick={handleCopy}
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
