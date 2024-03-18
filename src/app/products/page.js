import Chat from '@/components/Chat';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Poppins, Yeseva_One } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

const yesevaOne = Yeseva_One({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Products() {
  return (
    <main className='relative'>
      <Chat />
      <header
        className='h-60 relative bg-cover bg-center text-white'
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/background.jpg')",
        }}
      >
        <Navbar />
        <div className='h-full flex justify-center items-center text-center' style={yesevaOne.style}>
          <h3 className='text-3xl'>Our Products</h3>
        </div>
      </header>
      <section className='container mx-auto my-10 flex gap-x-8' style={poppins.style}>
        <div className='w-64 h-fit px-2 py-4 flex-col text-sm bg-white drop-shadow-lg rounded-xl overflow-hidden'>
          <button className='w-full text-start py-2 px-4 rounded-md hover:bg-black hover:bg-opacity-10 hover:transition-all'>
            Sarung Kursi
          </button>
          <button className='w-full text-start py-2 px-4 rounded-md hover:bg-black hover:bg-opacity-10 hover:transition-all'>
            Rumbai / Poni Tenda
          </button>
          <button className='w-full text-start py-2 px-4 rounded-md hover:bg-black hover:bg-opacity-10 hover:transition-all'>
            Plafon Dekorasi Tenda
          </button>
          <button className='w-full text-start py-2 px-4 rounded-md hover:bg-black hover:bg-opacity-10 hover:transition-all'>
            Cover Meja
          </button>
          <button className='w-full text-start py-2 px-4 rounded-md hover:bg-black hover:bg-opacity-10 hover:transition-all'>
            Kain Pelamin
          </button>
          <button className='w-full text-start py-2 px-4 rounded-md hover:bg-black hover:bg-opacity-10 hover:transition-all'>
            Background Dinding
          </button>
          <button className='w-full text-start py-2 px-4 rounded-md hover:bg-black hover:bg-opacity-10 hover:transition-all'>
            Dekorasi Tenda Lengkap
          </button>
          <button className='w-full text-start py-2 px-4 rounded-md hover:bg-black hover:bg-opacity-10 hover:transition-all'>
            Terpal Tenda
          </button>
          <button className='w-full text-start py-2 px-4 rounded-md hover:bg-black hover:bg-opacity-10 hover:transition-all'>
            Kain Lotto
          </button>
        </div>
        <div className='grid grid-cols-4 gap-4'>
          <div className='card-product h-fit bg-white drop-shadow-lg rounded-lg'>
            <Image src='/images/photography.png' height={130} width={130} alt='product' className='w-full' />
            <div className='p-2'>
              <p className='text-xs'>table runner / runner meja</p>
              <p className='mt-1 font-bold text-sm'>Rp50.000</p>
            </div>
          </div>
          <div className='card-product h-fit bg-white drop-shadow-lg rounded-lg'>
            <Image src='/images/photography.png' height={130} width={130} alt='product' className='w-full' />
            <div className='p-2'>
              <p className='text-xs'>table runner / runner meja</p>
              <p className='mt-1 font-bold text-sm'>Rp50.000</p>
            </div>
          </div>
          <div className='card-product h-fit bg-white drop-shadow-lg rounded-lg'>
            <Image src='/images/photography.png' height={130} width={130} alt='product' className='w-full' />
            <div className='p-2'>
              <p className='text-xs'>table runner / runner meja</p>
              <p className='mt-1 font-bold text-sm'>Rp50.000</p>
            </div>
          </div>
          <div className='card-product h-fit bg-white drop-shadow-lg rounded-lg'>
            <Image src='/images/photography.png' height={130} width={130} alt='product' className='w-full' />
            <div className='p-2'>
              <p className='text-xs'>table runner / runner meja</p>
              <p className='mt-1 font-bold text-sm'>Rp50.000</p>
            </div>
          </div>
          <div className='card-product h-fit bg-white drop-shadow-lg rounded-lg'>
            <Image src='/images/photography.png' height={130} width={130} alt='product' className='w-full' />
            <div className='p-2'>
              <p className='text-xs'>table runner / runner meja</p>
              <p className='mt-1 font-bold text-sm'>Rp50.000</p>
            </div>
          </div>
          <div className='card-product h-fit bg-white drop-shadow-lg rounded-lg'>
            <Image src='/images/photography.png' height={130} width={130} alt='product' className='w-full' />
            <div className='p-2'>
              <p className='text-xs'>table runner / runner meja</p>
              <p className='mt-1 font-bold text-sm'>Rp50.000</p>
            </div>
          </div>
          <div className='card-product h-fit bg-white drop-shadow-lg rounded-lg'>
            <Image src='/images/photography.png' height={130} width={130} alt='product' className='w-full' />
            <div className='p-2'>
              <p className='text-xs'>table runner / runner meja</p>
              <p className='mt-1 font-bold text-sm'>Rp50.000</p>
            </div>
          </div>
          <div className='card-product h-fit bg-white drop-shadow-lg rounded-lg'>
            <Image src='/images/photography.png' height={130} width={130} alt='product' className='w-full' />
            <div className='p-2'>
              <p className='text-xs'>table runner / runner meja</p>
              <p className='mt-1 font-bold text-sm'>Rp50.000</p>
            </div>
          </div>
          <div className='card-product h-fit bg-white drop-shadow-lg rounded-lg'>
            <Image src='/images/photography.png' height={130} width={130} alt='product' className='w-full' />
            <div className='p-2'>
              <p className='text-xs'>table runner / runner meja</p>
              <p className='mt-1 font-bold text-sm'>Rp50.000</p>
            </div>
          </div>
          <div className='card-product h-fit bg-white drop-shadow-lg rounded-lg'>
            <Image src='/images/photography.png' height={130} width={130} alt='product' className='w-full' />
            <div className='p-2'>
              <p className='text-xs'>table runner / runner meja</p>
              <p className='mt-1 font-bold text-sm'>Rp50.000</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
