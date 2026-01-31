import { Property } from "../components/PropertyCard";

const properties: Property[] = [
  {
    id: "1",
    title: "Modern Family Home",
    price: "$850,000",
    location: "123 Main St, Springfield",
    image: "/mock-images/house1.jpg",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
  },
  {
    id: "2",
    title: "Downtown Apartment",
    price: "$420,000",
    location: "456 City Ave, Metropolis",
    image: "/mock-images/house2.jpg",
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
  },
  {
    id: "3",
    title: "Cozy Cottage",
    price: "$320,000",
    location: "789 Lakeview Rd, Smalltown",
    image: "/mock-images/house3.jpg",
    bedrooms: 3,
    bathrooms: 1,
    area: 1400,
  },
  {
    id: "4",
    title: "Luxury Villa",
    price: "$1,750,000",
    location: "101 Ocean Dr, Seaside",
    image: "/mock-images/house4.jpg",
    bedrooms: 5,
    bathrooms: 4,
    area: 4000,
  },
];

export default properties;
