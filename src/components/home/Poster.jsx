import React from 'react';
import poster from '../../assets/home/pricing.jpg';

const Poster = () => {
  return (
    <div className="w-full mx-auto my-14 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Affordable Car Rental Plans</h2>
      <p className="text-gray-600 mb-6">
        Explore our flexible pricing options tailored to fit every journey and budget.
      </p>
      <img
        src={poster}
        alt="Pricing Poster"
        className="w-full h-auto md:h-[350px] rounded-lg shadow-lg"
        loading="lazy"
      />
    </div>
  );
};

export default Poster;
