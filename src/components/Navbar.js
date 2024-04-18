'use client';

import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-10 top-0  inset-x-0 p-6 flex justify-center ${
        hasScrolled ? 'transition-all bg-black bg-opacity-70' : 'transition-all'
      }`}
      style={poppins.style}
    >
      <div className='my-auto hidden md:flex gap-x-8 text-white'>
        <Link
          href='/'
          className={`hover:text-[#B8C1B2] hover:transition-all ${
            pathname === '/' ? 'text-[#B8C1B2] underline underline-offset-4' : 'text-white'
          }`}
        >
          Home
        </Link>
        <Link
          href='/products'
          className={`hover:text-[#B8C1B2] hover:transition-all ${
            pathname === '/products' ? 'text-[#B8C1B2] underline underline-offset-4' : 'text-white'
          }`}
        >
          Products
        </Link>
        <Link href='/testimonials' className={`hover:text-[#B8C1B2] hover:transition-all`}>
          Testimonials
        </Link>
        <Link
          href='/contact-us'
          className={`hover:text-[#B8C1B2] hover:transition-all ${
            pathname === '/contact-us' ? 'text-[#B8C1B2] underline underline-offset-4' : 'text-white'
          }`}
        >
          Contact Us
        </Link>
      </div>
      <div className='w-full flex justify-between md:hidden'>
        <div></div>
        <button onClick={toogleMenuOpen} className=''>
          <svg className='h-10 w-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>
        {isMenuOpen && (
          <div className='absolute p-1 inset-0'>
            <div className='bg-black bg-opacity-80 p-6 space-y-3 text-right'>
              <button onClick={toogleMenuOpen} className=''>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='w-8 h-8 text-white text-right'
                >
                  <line x1='18' y1='6' x2='6' y2='18'></line>
                  <line x1='6' y1='6' x2='18' y2='18'></line>
                </svg>
              </button>
              <Link href='/' className='block text-lg text-white text-center'>
                Home
              </Link>
              <Link href='/products' className='block text-lg text-white text-center'>
                Products
              </Link>
              <Link href='/testimonials' className='block text-lg text-white text-center'>
                Testimonials
              </Link>
              <Link href='/contact-us' className='block text-lg text-white text-center'>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
