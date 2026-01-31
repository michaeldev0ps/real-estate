import React from "react";
import Hero from "../components/Hero";
import PropertyGallery from "../components/PropertyGallery";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Featured Properties</h2>
        <PropertyGallery />
        <div className="flex justify-center mt-6">
          <Link href="/properties">
            <span className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded transition-all duration-200 cursor-pointer">View All Properties</span>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
