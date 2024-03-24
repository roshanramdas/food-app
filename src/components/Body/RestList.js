import React, { useState } from 'react';
import RestCard from './RestCard';
import SearchBar from './SearchBar';

const RestList = ({ restaurants }) => {
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  
    const handleSearch = (searchTerm) => {
      const filtered = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    };
  
    return (
      <div>
        <SearchBar onSearch={handleSearch} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredRestaurants.map(restaurant => (
            <RestCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    );
  };

export default RestList;
