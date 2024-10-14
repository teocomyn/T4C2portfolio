import React from 'react';
import { Code, Search, ShoppingBag } from 'lucide-react';

const DigitalWorkshop: React.FC = () => {
  const services = [
    { id: 1, icon: <Code className="w-12 h-12 mb-4 text-blue-500" />, title: 'Web Development', description: 'Custom website and web application development using the latest technologies.' },
    { id: 2, icon: <Search className="w-12 h-12 mb-4 text-green-500" />, title: 'SEO Optimization', description: 'Improve your website\'s visibility and ranking in search engine results.' },
    { id: 3, icon: <ShoppingBag className="w-12 h-12 mb-4 text-purple-500" />, title: 'E-commerce Solutions', description: 'Set up and optimize your online store for maximum conversions and sales.' },
  ];

  const projects = [
    { id: 1, title: 'ArtisanCraft Online Store', description: 'A fully responsive e-commerce platform for artisanal products.', image: 'https://source.unsplash.com/random/800x600?website' },
    { id: 2, title: 'MusicMasters Academy', description: 'An interactive online learning platform for aspiring musicians.', image: 'https://source.unsplash.com/random/800x600?music' },
    { id: 3, title: 'EcoTrack Analytics Dashboard', description: 'A data visualization tool for environmental sustainability metrics.', image: 'https://source.unsplash.com/random/800x600?dashboard' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Digital Workshop</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6 text-center">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-8">Why Choose Us?</h2>
        <div className="bg-gray-100 rounded-lg p-8">
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li>Expertise in cutting-edge web technologies and frameworks</li>
            <li>Data-driven approach to SEO and digital marketing</li>
            <li>Custom solutions tailored to your specific business needs</li>
            <li>Ongoing support and maintenance for all our digital products</li>
            <li>Proven track record of successful projects across various industries</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DigitalWorkshop;