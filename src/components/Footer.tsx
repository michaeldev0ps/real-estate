import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full bg-blue-900 text-white py-6 mt-12">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
      <div className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} RealEstatePro. All rights reserved.</div>
      <div className="flex gap-4 text-xl">
        <a href="#" aria-label="Facebook"><FaFacebook className="hover:text-blue-400 transition" /></a>
        <a href="#" aria-label="Instagram"><FaInstagram className="hover:text-pink-400 transition" /></a>
        <a href="#" aria-label="Twitter"><FaTwitter className="hover:text-blue-300 transition" /></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedin className="hover:text-blue-200 transition" /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
