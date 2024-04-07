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
    <footer
      className='py-4 px-5 lg:px-8 flex flex-col h-fit  md:flex-row justify-around text-white bg-[#424242]'
      style={poppins.style}
    >
      <Link href='/' className='my-auto text-center'>
        <p className='text-xl italic' style={bilboSwashCaps.style}>
          Pt Saputra Tenda Sejahtera
        </p>
        <p className='text-[6px]'>Konveksi pembuat dekorasi tenda, hotel, dan kantor.</p>
      </Link>
      <div className='my-auto mx-auto text-sm text-center flex flex-col md:flex-row gap-x-8'>
        <Link href='#'>About Us</Link>
        <Link href='#'>Terms of Service</Link>
        <Link href='#'>Privacy Policy</Link>
        <Link href='#'>FAQ</Link>
      </div>
      <div className='mt-4 md:my-auto text-center'>
        <p className='text-xs'>Our Online Store :</p>
        <div className='flex justify-center gap-x-4'>
          <Link href='#' className='cursor-pointer'>
            <Image src='/images/tokopedia.png' height={25} width={24} alt='tokopedia' className='' />
          </Link>
          <Link href='#' className='cursor-pointer'>
            <Image src='/images/shopee.png' height={25} width={24} alt='tokopedia' className='' />
          </Link>
        </div>
      </div>
    </footer>
  );
}
