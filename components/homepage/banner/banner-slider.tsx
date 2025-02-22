'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface BannerSliderProps {
  banners: {
    id: number;
    image: string;
    alt: string;
    link?: string;
    title?:string;
  }[];
  className?: string; // Optional Tailwind CSS classes for additional styling
}

const BannerSlider: React.FC<BannerSliderProps> = ({ banners, className = '' }) => {
  return (
    <div className={`${className}`}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000, // Auto-slide every 5 seconds
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {banners?.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-96 md:h-[500px]">
              <Image
                src={banner.image}
                alt={banner.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg overflow-hidden"
              />
              {banner.link && (
                <a
                  href={banner.link}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300"
                >
                  <span className="text-white text-3xl font-semibold">{banner.title}</span>
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;