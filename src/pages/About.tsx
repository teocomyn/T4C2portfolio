import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Studio Polymathique Teo Comyn</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-gray-700 mb-4">
          At Studio Polymathique Teo Comyn, we believe in the power of interdisciplinary creativity. Our mission is to bridge the gaps between art, music, and technology, creating innovative experiences that inspire and captivate.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Meet Teo Comyn</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img src="https://source.unsplash.com/random/400x400?portrait" alt="Teo Comyn" className="w-64 h-64 object-cover rounded-full mb-6 md:mr-8" />
          <div>
            <p className="text-gray-700 mb-4">
              Teo Comyn is a multidisciplinary artist, musician, and digital innovator. With a background spanning fine arts, music production, and web development, Teo brings a unique perspective to every project.
            </p>
            <p className="text-gray-700 mb-4">
              Driven by a passion for exploring the intersections of different creative disciplines, Teo founded Studio Polymathique to push the boundaries of what's possible when art meets technology.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Embracing interdisciplinary collaboration</li>
          <li>Pushing the boundaries of traditional and digital mediums</li>
          <li>Fostering innovation through experimentation</li>
          <li>Creating immersive and interactive experiences</li>
          <li>Bridging the gap between art and technology</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Join Our Creative Journey</h2>
        <p className="text-gray-700 mb-4">
          Whether you're an artist, musician, tech enthusiast, or simply someone who appreciates creativity in all its forms, we invite you to join us on this exciting journey. Explore our services, shop our products, and stay updated with our latest projects and insights through our blog.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default About;