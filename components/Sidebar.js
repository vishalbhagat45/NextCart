import { useState } from 'react';

export default function Sidebar() {
  const [price, setPrice] = useState(5000);
  const [brands, setBrands] = useState([]);
  const [ratings, setRatings] = useState([]);

  const brandList = ["Samsung", "Apple", "Puma", "Nike","Van Heusen"];
  const ratingList = [4, 3, 2];

  const toggleBrand = (brand) => {
    setBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleRating = (rating) => {
    setRatings(prev =>
      prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
    );
  };

  return (
    <aside className="w-64 p-4 border-r bg-white hidden md:block">
      {/* Category */}
      <ul className="space-y-2">
      <li className="flex items-center gap-2 text-sm cursor-pointer hover:underline">
        <span className="w-3 h-3 rounded-full bg-black"></span>
        Electronics
      </li>
      <li className="flex items-center gap-2 text-sm cursor-pointer hover:underline">
        <span className="w-3 h-3 rounded-full bg-black"></span>
        Clothing
      </li>
      <li className="flex items-center gap-2 text-sm cursor-pointer hover:underline">
        <span className="w-3 h-3 rounded-full bg-black"></span>
        Home
      </li>
    </ul>


      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Price</h3>
        <input
          type="range"
          min="0"
          max="100000"
          step="1000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full"
        />
        <p className="text-sm mt-1">Up to ₹{price}</p>
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Brand</h3>
        {brandList.map((brand) => (
          <label key={brand} className="block text-sm">
            <input
              type="checkbox"
              checked={brands.includes(brand)}
              onChange={() => toggleBrand(brand)}
              className="mr-2"
            />
            {brand}
          </label>
        ))}
      </div>

      {/* Ratings Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Customer Ratings</h3>
        {ratingList.map((rating) => (
          <label key={rating} className="block text-sm">
            <input
              type="checkbox"
              checked={ratings.includes(rating)}
              onChange={() => toggleRating(rating)}
              className="mr-2"
            />
            {rating}★ & above
          </label>
        ))}
      </div>

      {/* Apply Filters */}
      <div className="mt-4">
        <button className="w-full bg-sky-600 text-white py-2 rounded hover:bg-blue-700">
          Apply Filters
        </button>
      </div>
    </aside>
  );
}

