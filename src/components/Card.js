import React from "react";

const Card = ({ info }) => {
  const { images, title, price } = info;
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <img
        src={images[0]}
        alt="Product 1"
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      <div className="mt-4">
        <span className="text-2xl font-bold">${price}</span>
        <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
