import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data';

export default function ProductSlider() {
  const slugify = (title) => title.replace(/\s/g, '-');

  const [selectedCategory, setSelectedCategory] = useState('Accessories');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter((product) => product.type === selectedCategory);
  const getButtonBgColor = (category) => {
    switch (category) {
      case 'Accessories':
        return 'bg-[#AECBFA]'; // Pastel Blue
      case 'Non-Scale Figures':
        return 'bg-[#C8E6C9]'; // Pastel Green
      case 'Blu-rays':
        return 'bg-[#F8BBD0]'; // Pastel Pink
      case 'Manga':
        return 'bg-[#D1C4E9]'; // Pastel Purple
      case 'Clothing':
        return 'bg-[#FFF9C4]'; // Pastel Yellow
      case 'Kitchen & Home':
        return 'bg-[#FFE0B2]'; // Pastel Orange
      case 'Games':
        return 'bg-[#B2EBF2]'; // Pastel Orange
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex font-medium lg:justify-around font-varela justify-start mb-6 overflow-x-auto whitespace-nowrap space-x-2">
        {['Accessories', 'Non-Scale Figures', 'Blu-rays', 'Manga', 'Clothing', 'Kitchen & Home', 'Games'].map((category) => (
          <button
            key={category}
            className={`px-4 py-4  my-3 rounded-lg font-varela transition-colors duration-300 ${
              selectedCategory === category ? `${getButtonBgColor(category)} text-black` : 'bg-[#4e4747] text-white'
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.title} className="bg-white font-varela rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105">
            <div className="relative">
              <i className="fa-solid fa-heart absolute top-2 right-2 text-2xl cursor-pointer text-gray-500 transition-colors duration-300 hover:text-red-500"></i>
              <img className="w-full h-48 object-contain transition-transform duration-300" src={product.image[0]} alt={product.title} />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-varela font-semibold">{product.title}</h2>
              <div className="flex justify-center items-center mt-2">
                <p className="line-through mr-3 text-[#F4CC5E]">${product.actualprize}</p>
                <p className="text-lg font-bold">${product.price}</p>
              </div>
              <Link to={`/product/${slugify(product.title)}`}>
                <button className="mt-4 px-4 py-2 border border-gray-300 rounded-lg transition-colors duration-300 bg-[#004d35] text-white hover:bg-[#004d35e2]">
                  View <i className="fa-solid fa-arrow-right ml-1"></i>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
