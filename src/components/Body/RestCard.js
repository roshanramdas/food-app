import React from 'react';

const RestCard = ({ restaurant }) => {
  const { name, cuisine, rating, priceForTwo, image } = restaurant;

  return (
    <a href="#" className="max-w-xs rounded overflow-hidden shadow-lg m-4 block cursor-pointer">
      <div>
        <img className="w-full h-40 object-cover" src={image} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base mb-2">{cuisine}</p>
          <p className="text-gray-700 text-base mb-2">Rating: {rating}</p>
          <p className="text-gray-700 text-base">Price for two: {priceForTwo}</p>
        </div>
      </div>
    </a>
  );
};

export default RestCard;