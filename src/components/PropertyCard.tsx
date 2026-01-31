import React from "react";

export type Property = {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
};

const PropertyCard = ({ property }: { property: Property }) => (
  <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200 overflow-hidden group">
    <img
      src={property.image}
      alt={property.title}
      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2 text-blue-900">{property.title}</h3>
      <div className="text-blue-700 mb-1">{property.location}</div>
      <div className="text-lg font-bold text-green-600 mb-2">{property.price}</div>
      <div className="flex gap-4 text-sm text-gray-600">
        <span>{property.bedrooms} Beds</span>
        <span>{property.bathrooms} Baths</span>
        <span>{property.area} sqft</span>
      </div>
    </div>
  </div>
);

export default PropertyCard;
