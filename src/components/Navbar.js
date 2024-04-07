'use client';

import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='absolute top-0  inset-x-0 py-3 px-6 flex justify-center' style={poppins.style}>
      <div className='my-auto flex gap-x-8 text-white'>
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
          href='#'
          className={`hover:text-[#B8C1B2] hover:transition-all ${
            pathname === '/contact' ? 'text-[#B8C1B2] underline underline-offset-4' : 'text-white'
          }`}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
