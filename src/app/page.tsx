import Image from "next/image";

export default function Home() {
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
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
