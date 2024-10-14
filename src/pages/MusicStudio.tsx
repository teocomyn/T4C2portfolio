import React from 'react';
import { Play, Download, ShoppingCart } from 'lucide-react';

const MusicStudio: React.FC = () => {
  const tracks = [
    { id: 1, title: 'Ethereal Waves', duration: '3:45', price: '$0.99' },
    { id: 2, title: 'Urban Pulse', duration: '4:12', price: '$1.29' },
    { id: 3, title: 'Ambient Dreams', duration: '5:30', price: '$0.99' },
    // Add more tracks as needed
  ];

  const services = [
    { id: 1, title: 'Music Production', description: 'Full-service music production for artists and bands.', price: 'Starting at $500' },
    { id: 2, title: 'Mixing & Mastering', description: 'Professional mixing and mastering services for your tracks.', price: 'Starting at $100 per track' },
    { id: 3, title: 'Custom Composition', description: 'Bespoke music composition for films, games, and commercials.', price: 'Custom quote' },
    // Add more services as needed
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Music Studio</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Latest Releases</h2>
        <div className="bg-gray-100 rounded-lg p-6">
          {tracks.map((track) => (
            <div key={track.id} className="flex items-center justify-between py-4 border-b last:border-b-0">
              <div className="flex items-center">
                <Play className="w-6 h-6 mr-4 cursor-pointer text-blue-500" />
                <div>
                  <h3 className="font-semibold">{track.title}</h3>
                  <p className="text-sm text-gray-600">{track.duration}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-4">{track.price}</span>
                <Download className="w-6 h-6 cursor-pointer text-green-500 mr-2" />
                <ShoppingCart className="w-6 h-6 cursor-pointer text-blue-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Production Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="font-semibold">{service.price}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Inquire
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MusicStudio;