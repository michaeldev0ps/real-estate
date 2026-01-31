import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const agent = {
  name: "Alex Morgan",
  bio: "With over 10 years of experience, Alex is dedicated to helping clients find their perfect home. Specializing in residential and luxury properties.",
  image: "/mock-images/agent.jpg",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">About Us</h1>
        <img src={agent.image} alt={agent.name} className="w-32 h-32 rounded-full shadow mb-4 object-cover" />
        <h2 className="text-xl font-semibold text-blue-800 mb-2">{agent.name}</h2>
        <p className="text-center text-gray-700 max-w-xl">{agent.bio}</p>
      </main>
      <Footer />
    </>
  );
}
