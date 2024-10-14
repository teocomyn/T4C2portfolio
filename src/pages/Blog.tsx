import React from 'react';
import { Calendar, User } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Intersection of Art and Technology',
      excerpt: 'Exploring how digital tools are reshaping the landscape of contemporary art.',
      date: '2024-03-15',
      author: 'Teo Comyn',
      image: 'https://source.unsplash.com/random/800x600?art+technology'
    },
    {
      id: 2,
      title: 'Mastering the Art of Music Production',
      excerpt: 'Tips and tricks for aspiring music producers to elevate their craft.',
      date: '2024-03-10',
      author: 'Teo Comyn',
      image: 'https://source.unsplash.com/random/800x600?music+production'
    },
    {
      id: 3,
      title: 'SEO Strategies for Creative Professionals',
      excerpt: 'How artists and musicians can leverage SEO to increase their online visibility.',
      date: '2024-03-05',
      author: 'Teo Comyn',
      image: 'https://source.unsplash.com/random/800x600?seo'
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="mr-4">{post.date}</span>
                <User className="w-4 h-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <a href="#" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
        <div className="flex flex-wrap gap-4">
          <CategoryTag name="Art" />
          <CategoryTag name="Music" />
          <CategoryTag name="Technology" />
          <CategoryTag name="Digital Marketing" />
          <CategoryTag name="Creativity" />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-4">Stay updated with our latest blog posts and creative insights.</p>
        <form className="flex max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

const CategoryTag: React.FC<{ name: string }> = ({ name }) => (
  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
    {name}
  </span>
);

export default Blog;