import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Music, Code, ShoppingBag } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Studio Polymathique Teo Comyn</h1>
          <p className="text-xl mb-8">Exploring the intersections of art, music, and technology</p>
          <Link to="/about" className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Learn More
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Palette className="w-12 h-12 mb-4" />}
              title="Art Gallery"
              description="Explore our curated collection of contemporary artworks."
              link="/art"
            />
            <ServiceCard
              icon={<Music className="w-12 h-12 mb-4" />}
              title="Music Studio"
              description="Discover our music production and composition services."
              link="/music"
            />
            <ServiceCard
              icon={<Code className="w-12 h-12 mb-4" />}
              title="Digital Workshop"
              description="Cutting-edge digital solutions for your business needs."
              link="/digital"
            />
            <ServiceCard
              icon={<ShoppingBag className="w-12 h-12 mb-4" />}
              title="Shop"
              description="Browse our selection of digital and physical products."
              link="/shop"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Latest from Our Blog</h2>
          <Link to="/blog" className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
            Read Our Blog
          </Link>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; link: string }> = ({ icon, title, description, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    {icon}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link to={link} className="text-blue-500 hover:underline">Learn More</Link>
  </div>
);

export default Home;