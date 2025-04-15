// Defines a product type with mandatory properties
export type Product = {
  // Unique identifier of the product
  id: number;

  // Short product title
  title: string;

  // Detailed product description
  description: string;

  // Product price
  price: number;

  // Percentage discount for the product
  discountPercentage: number;

  // Product rating, typically out of 5
  rating: number;

  // Available stock count
  stock: number;

  // Brand of the product
  brand: string;

  // General category for the product
  category: string;

  // URL for the product thumbnail image
  thumbnail: string;
};
