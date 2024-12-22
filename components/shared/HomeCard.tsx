'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'home_card_class px-4 py-6 flex flex-col justify-between w-full  min-h-[190px] rounded-[14px] cursor-pointer hover:scale-[1.01] transition-transform duration-400 ease-in-out',
        // className
      )}
      onClick={handleClick}
    >
      <div className="flex-center  bg-black bg-opacity-70 backdrop-blur-lg size-12 rounded-[10px]">
        <Image src={img} alt="meeting" width={27} height={27} />
      </div>
      
      <div className="flex flex-col gap-0">
        <h1 className="text-2xl font-semibold ">{title}</h1>
        <p className="text-lg font-light">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;