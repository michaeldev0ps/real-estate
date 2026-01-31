import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import MapEmbed from "../components/MapEmbed";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Contact Us</h1>
        <ContactForm />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}
