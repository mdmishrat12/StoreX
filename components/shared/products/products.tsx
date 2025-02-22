'use client'
import ProductCard from '@/components/ui/product-card/product-card';
import React from 'react';

const Products: React.FC = () => {
  const handleAddToCart = (productName: string) => {
    alert(`Added ${productName} to cart!`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard
          image="/product-1.jpg"
          name="Product 1"
          price={29.99}
          description="A high-quality product for everyday use."
          onAddToCart={() => handleAddToCart('Product 1')}
        />
        <ProductCard
          image="/product-2.jpg"
          name="Product 2"
          price={49.99}
          description="Premium product with advanced features."
          onAddToCart={() => handleAddToCart('Product 2')}
        />
        <ProductCard
          image="/product-3.jpg"
          name="Product 3"
          price={19.99}
          description='Premium product with advanced features.'
          onAddToCart={() => handleAddToCart('Product 3')}
        />
        <ProductCard
          image="/product-3.jpg"
          name="Product 3"
          price={19.99}
          description='Premium product with advanced features.'
          onAddToCart={() => handleAddToCart('Product 3')}
        />
      </div>
    </div>
  );
};

export default Products;