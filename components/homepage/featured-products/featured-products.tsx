import ProductCardSlider from '@/components/shared/products/products-slider';
import React from 'react';

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      id: 1,
      image: '/product-1.jpg',
      name: 'Product 1',
      price: 29.99,
      description: 'A high-quality product for everyday use.',
    },
    {
      id: 2,
      image: '/product-2.jpg',
      name: 'Product 2',
      price: 49.99,
      description: 'Premium product with advanced features.',
    },
    {
      id: 3,
      image: '/product-3.jpg',
      name: 'Product 3',
      price: 19.99,
    },
    {
      id: 4,
      image: '/product-1.jpg',
      name: 'Product 4',
      price: 99.99,
      description: 'Luxury product with exclusive features.',
    },
    {
      id: 5,
      image: '/product-2.jpg',
      name: 'Product 5',
      price: 39.99,
    },
    {
      id: 6,
      image: '/product-3.jpg',
      name: 'Product 6',
      price: 59.99,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Featured Products</h1>
      <ProductCardSlider products={products} className="mb-8" />
    </div>
  );
};

export default FeaturedProducts;