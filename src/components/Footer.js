import { Bilbo_Swash_Caps } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const bilboSwashCaps = Bilbo_Swash_Caps({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function Footer() {
  return (
    <footer className='flex justify-between'>
      <p className='text-8xl italic' style={bilboSwashCaps.style}>
        Pt Saputra Tenda Sejahtera
      </p>
      <div className='my-auto flex gap-x-8'>
        <Link href='#'>Home</Link>
        <Link href='#'>Products</Link>
        <Link href='#'>Testimonials</Link>
        <Link href='#'>Contact Us</Link>
      </div>
      <div></div>
    </footer>
  );
}
