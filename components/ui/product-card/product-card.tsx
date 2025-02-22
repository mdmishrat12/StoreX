import React from 'react';
import Image from 'next/image'; // Use Next.js Image component for optimized images
import { ProductCardProps } from './types';
import Button from '../button/button';
import { Star } from 'lucide-react';



const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  onAddToCart,
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md cursor-pointer overflow-hidden ${className}`}>
      {/* Product Image */}
      <div className="relative w-full h-[300px] text-center">
        <Image
          src={image}
          alt={name}
          width={300}
          height={400}
          objectFit="cover"
          className="hover:scale-105 transition-transform duration-300 block w-full"
        />
      </div>

      {/* Product Details */}
      <div className="p-2">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <div className="flex items-center gap-2">
        {Array.from({length:5}).map((item,i)=>(<div key={i} className=''><Star className='h-4 w-4'/></div>))}
        </div>
        <p className="text-xl font-bold text-gray-900">${price.toFixed(2)}</p>
      </div>

      {/* Add to Cart Button */}
      {onAddToCart && (
        <div className="p-2">
          <Button
            size="md"
            onClick={onAddToCart}
            className="w-full"
          >
            Add to Cart
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;