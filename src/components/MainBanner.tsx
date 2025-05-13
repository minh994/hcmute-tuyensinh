import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const MainBanner = () => {
  return (
    <div className="main-banner">
      <div className="container mx-auto px-4 py-2">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-[200px] md:h-[240px] w-full">
                <Image
                  src="/assets/banner1.jpeg"
                  alt="HCMUTE Banner"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[200px] md:h-[240px] w-full">
                <Image
                  src="/assets/banner2.jpeg"
                  alt="HCMUTE Banner"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default MainBanner;
