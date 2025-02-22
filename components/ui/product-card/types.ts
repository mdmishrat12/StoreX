export interface ProductCardProps {
  image: string; // Product image URL
  name: string; // Product name
  price: number; // Product price
  description?: string; // Optional product description
  onAddToCart?: () => void; // Optional "Add to Cart" handler
  className?: string; // Optional Tailwind CSS classes for additional styling
}