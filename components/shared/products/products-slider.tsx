'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProductCard from '@/components/ui/product-card/product-card';

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description?: string;
}

interface ProductCardSliderProps {
  products: Product[];
  className?: string; // Optional Tailwind CSS classes for additional styling
}

const ProductCardSlider: React.FC<ProductCardSliderProps> = ({ products, className = '' }) => {
  return (
    <div className={`${className}`}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2} // Default for small screens
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slides for sm screens
          },
          768: {
            slidesPerView: 3, // 3 slides for md screens
          },
          1024: {
            slidesPerView: 4, // 4 slides for lg screens
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
              onAddToCart={() => alert(`Added ${product.name} to cart!`)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCardSlider;