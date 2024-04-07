import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Chat() {
  return (
    <Link href='https://wa.me/1234567890' className='fixed content-center bottom-14 right-10 cursor-pointer z-10'>
      {/* <span className='text-black'>Hubungi Kami</span> */}
      {/* <br /> */}
      <Image src='/images/wa.png' height={50} width={50} alt='WhatsApp Chat' className='mx-auto' />
    </Link>
  );
}
