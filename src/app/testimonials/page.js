import Navbar from '@/components/Navbar';
import { Yeseva_One } from 'next/font/google';
import React from 'react';

const yesevaOne = Yeseva_One({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function Testimonials() {
  return (
    <main>
      <header
        className='h-60 relative bg-cover bg-center text-white'
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/background.jpg')",
        }}
      >
        <Navbar />
        <div className='h-full flex justify-center items-center text-center' style={yesevaOne.style}>
          <h3 className='text-3xl underline underline-offset-4'>Testimonials</h3>
        </div>
      </header>
    </main>
  );
}
