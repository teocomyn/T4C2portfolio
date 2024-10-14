import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Shop: React.FC = () => {
  const products = [
    { id: 1, name: 'Digital Art Print', price: 29.99, image: 'https://source.unsplash.com/random/800x600?art', type: 'digital' },
    { id: 2, name: 'Music Production Course', price: 99.99, image: 'https://source.unsplash.com/random/800x600?music', type: 'digital' },
    { id: 3, name: 'SEO Optimization Guide', price: 19.99, image: 'https://source.unsplash.com/random/800x600?seo', type: 'digital' },
    { id: 4, name: 'Limited Edition T-Shirt', price: 34.99, image: 'https://source.unsplash.com/random/800x600?tshirt', type: 'physical' },
    { id: 5, name: 'Artistic Mouse Pad', price: 14.99, image: 'https://source.unsplash.com/random/800x600?mousepad', type: 'physical' },
    { id: 6, name: 'Custom Designed Notebook', price: 24.99, image: 'https://source.unsplash.com/random/800x600?notebook', type: 'physical' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Shop</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Digital Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.filter(p => p.type === 'digital').map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Physical Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.filter(p => p.type === 'physical').map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 flex items-center">
        <ShoppingCart className="w-5 h-5 mr-2" />
        Add to Cart
      </button>
    </div>
  </div>
);

export default Shop;