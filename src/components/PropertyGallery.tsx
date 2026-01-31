import React from "react";

const images = [
  "/mock-images/house1.jpg",
  "/mock-images/house2.jpg",
  "/mock-images/house3.jpg",
  "/mock-images/house4.jpg",
];

const PropertyGallery = () => (
  <div className="w-full flex gap-4 overflow-x-auto py-4">
    {images.map((img, idx) => (
      <img
        key={idx}
        src={img}
        alt={`Property ${idx + 1}`}
        className="h-40 w-64 object-cover rounded-lg shadow-md flex-shrink-0 hover:scale-105 transition-transform duration-200"
      />
    ))}
  </div>
);

export default PropertyGallery;
