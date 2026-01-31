import React from "react";

const Hero = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-blue-50 to-white text-center p-8">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-900">Find Your Dream Home</h1>
    <p className="text-lg md:text-2xl text-blue-700 mb-6">Browse the best properties for sale and rent</p>
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow transition-all duration-200"
    >
      Chat on WhatsApp
    </a>
  </section>
);

export default Hero;
