import { Bilbo_Swash_Caps, Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const bilboSwashCaps = Bilbo_Swash_Caps({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Footer() {
  return (
    <footer className='py-4 flex justify-around text-white bg-[#424242]' style={poppins.style}>
      <Link href='/' className='text-center'>
        <p className='text-xl italic' style={bilboSwashCaps.style}>
          Pt Saputra Tenda Sejahtera
        </p>
        <p className='text-[6px]'>Konveksi pembuat dekorasi tenda, hotel, dan kantor.</p>
      </Link>
      <div className='my-auto flex gap-x-8'>
        <Link href='#'>About Us</Link>
        <Link href='#'>Terms of Service</Link>
        <Link href='#'>Privacy Policy</Link>
        <Link href='#'>FAQ</Link>
      </div>
      <div className='flex gap-x-4'>
        <Link href='#' className='cursor-pointer'>
          <Image src='/images/tokopedia.png' height={25} width={24} alt='tokopedia' className='' />
        </Link>
        <Link href='#' className='cursor-pointer'>
          <Image src='/images/shopee.png' height={25} width={24} alt='tokopedia' className='' />
        </Link>
      </div>
    </footer>
  );
}
