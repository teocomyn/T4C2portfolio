import React from 'react';

const ArtGallery: React.FC = () => {
  const artworks = [
    { id: 1, title: 'Abstract Harmony', image: 'https://source.unsplash.com/random/800x600?abstract', price: '$500' },
    { id: 2, title: 'Urban Landscape', image: 'https://source.unsplash.com/random/800x600?cityscape', price: '$750' },
    { id: 3, title: 'Nature\'s Whisper', image: 'https://source.unsplash.com/random/800x600?nature', price: '$600' },
    // Add more artworks as needed
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Art Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={artwork.image} alt={artwork.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
              <p className="text-gray-600 mb-4">{artwork.price}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Purchase
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Artist Biography</h2>
        <p className="text-gray-700 mb-4">
          Teo Comyn is a multidisciplinary artist known for his innovative approach to combining traditional and digital mediums. With a background in both fine arts and technology, Teo's work explores the intersection of the analog and digital worlds, creating unique pieces that challenge perception and engage viewers on multiple levels.
        </p>
        <h3 className="text-xl font-semibold mb-2">Upcoming Exhibitions</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Digital Dreams - New York Gallery, June 2024</li>
          <li>Analog/Digital Fusion - Paris Art Fair, September 2024</li>
          <li>Retrospective: A Decade of Innovation - London Museum of Modern Art, December 2024</li>
        </ul>
      </div>
    </div>
  );
};

export default ArtGallery;