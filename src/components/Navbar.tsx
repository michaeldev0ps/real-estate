import React from "react";
import { FaHome, FaBuilding, FaInfoCircle, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => (
  <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
    <div className="flex items-center gap-2 text-blue-900 font-bold text-xl">
      <FaHome className="text-blue-700" /> RealEstatePro
    </div>
    <ul className="flex gap-6 text-blue-800 font-medium">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/properties">Properties</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      <li>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="inline text-green-500 text-lg" />
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
