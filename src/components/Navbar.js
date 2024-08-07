"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toogleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pathname = usePathname();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0  z-10 flex justify-center p-6 ${
        hasScrolled ? "bg-black bg-opacity-70 transition-all" : "transition-all"
      }`}
      style={poppins.style}
    >
      <div className="my-auto hidden gap-x-8 text-white md:flex">
        <Link
          href="/"
          className={`hover:text-[#B8C1B2] hover:transition-all ${
            pathname === "/"
              ? "text-[#B8C1B2] underline underline-offset-4"
              : "text-white"
          }`}
        >
          Home
        </Link>
        <Link
          href="/products"
          className={`hover:text-[#B8C1B2] hover:transition-all ${
            pathname === "/products"
              ? "text-[#B8C1B2] underline underline-offset-4"
              : "text-white"
          }`}
        >
          Products
        </Link>
        <Link
          href="/testimonials"
          className={`hover:text-[#B8C1B2] hover:transition-all`}
        >
          Testimonials
        </Link>
        <Link
          href="/about-us"
          className={`hover:text-[#B8C1B2] hover:transition-all ${
            pathname === "/contact-us"
              ? "text-[#B8C1B2] underline underline-offset-4"
              : "text-white"
          }`}
        >
          About Us
        </Link>
      </div>
      <div className="flex w-full justify-between md:hidden">
        <div></div>
        <button onClick={toogleMenuOpen} className="">
          <svg
            className="h-10 w-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="slideIn absolute inset-0 p-1">
            <div className="space-y-3 bg-black bg-opacity-80 p-6 text-right">
              <button onClick={toogleMenuOpen} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-right text-white"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <Link href="/" className="block text-center text-lg text-white">
                Home
              </Link>
              <Link
                href="/products"
                className="block text-center text-lg text-white"
              >
                Products
              </Link>
              <Link
                href="/testimonials"
                className="block text-center text-lg text-white"
              >
                Testimonials
              </Link>
              <Link
                href="/about-us"
                className="block text-center text-lg text-white"
              >
                About Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
