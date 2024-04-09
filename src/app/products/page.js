'use client';

import Chat from '@/components/Chat';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Poppins, Yeseva_One } from 'next/font/google';
import React, { useState } from 'react';
import CardProduct from '@/components/CardProduct';
import {
  SarungKursi,
  RumbaiTenda,
  Plafon,
  KainPelamin,
  BackgroundDinding,
  CoverMeja,
  DekorasiLengkap,
} from '@/services/dataProduct/serve';

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
  const [productTab, setProductTab] = useState('AllProducts');

  function loopData(product, callback) {
    return product.map(callback);
  }

  const switchTab = (tabName) => {
    setProductTab(tabName);
  };

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
          <h3 className='text-3xl underline underline-offset-4'>Our Products</h3>
        </div>
      </header>
      <section className='mx-auto px-5 my-10 block md:flex md:justify-center  gap-x-8' style={poppins.style}>
        <div className='w-full md:w-48 lg:w-56 xl:w-64 h-fit px-2 py-4 flex-col text-sm md:text-xs lg:text-sm bg-white drop-shadow-lg rounded-xl overflow-hidden'>
          <button
            onClick={() => switchTab('AllProducts')}
            className={`w-full text-start py-2 px-4 rounded-md ${
              productTab === 'AllProducts'
                ? 'bg-black bg-opacity-10 transition-all'
                : 'hover:bg-black hover:bg-opacity-10 hover:transition-all'
            }`}
          >
            Semua Produk
          </button>
          <button
            onClick={() => switchTab('SarungKursi')}
            className={`w-full text-start py-2 px-4 rounded-md ${
              productTab === 'SarungKursi'
                ? 'bg-black bg-opacity-10 transition-all'
                : 'hover:bg-black hover:bg-opacity-10 hover:transition-all'
            }`}
          >
            Sarung Kursi
          </button>
          <button
            onClick={() => switchTab('RumbaiTenda')}
            className={`w-full text-start py-2 px-4 rounded-md ${
              productTab === 'RumbaiTenda'
                ? 'bg-black bg-opacity-10 transition-all'
                : 'hover:bg-black hover:bg-opacity-10 hover:transition-all'
            }`}
          >
            Rumbai / Poni Tenda
          </button>
          <button
            onClick={() => switchTab('Plafon')}
            className={`w-full text-start py-2 px-4 rounded-md ${
              productTab === 'Plafon'
                ? 'bg-black bg-opacity-10 transition-all'
                : 'hover:bg-black hover:bg-opacity-10 hover:transition-all'
            }`}
          >
            Plafon Dekorasi Tenda
          </button>
          <button
            onClick={() => switchTab('CoverMeja')}
            className={`w-full text-start py-2 px-4 rounded-md ${
              productTab === 'CoverMeja'
                ? 'bg-black bg-opacity-10 transition-all'
                : 'hover:bg-black hover:bg-opacity-10 hover:transition-all'
            }`}
          >
            Cover Meja
          </button>
          <button
            onClick={() => switchTab('KainPelamin')}
            className={`w-full text-start py-2 px-4 rounded-md ${
              productTab === 'KainPelamin'
                ? 'bg-black bg-opacity-10 transition-all'
                : 'hover:bg-black hover:bg-opacity-10 hover:transition-all'
            }`}
          >
            Kain Pelamin
          </button>
          <button
            onClick={() => switchTab('BackgroundDinding')}
            className={`w-full text-start py-2 px-4 rounded-md ${
              productTab === 'BackgroundDinding'
                ? 'bg-black bg-opacity-10 transition-all'
                : 'hover:bg-black hover:bg-opacity-10 hover:transition-all'
            }`}
          >
            Background Dinding
          </button>
          <button
            onClick={() => switchTab('DekorasiLengkap')}
            className={`w-full text-start py-2 px-4 rounded-md ${
              productTab === 'DekorasiLengkap'
                ? 'bg-black bg-opacity-10 transition-all'
                : 'hover:bg-black hover:bg-opacity-10 hover:transition-all'
            }`}
          >
            Dekorasi Tenda Lengkap
          </button>
          <button
            onClick={() => switchTab('TerpalTenda')}
            className={`w-full text-start py-2 px-4 rounded-md ${
              productTab === 'TerpalTenda'
                ? 'bg-black bg-opacity-10 transition-all'
                : 'hover:bg-black hover:bg-opacity-10 hover:transition-all'
            }`}
          >
            Terpal Tenda
          </button>
          <button
            onClick={() => switchTab('KainLotto')}
            className={`w-full text-start py-2 px-4 rounded-md ${
              productTab === 'KainLotto'
                ? 'bg-black bg-opacity-10 transition-all'
                : 'hover:bg-black hover:bg-opacity-10 hover:transition-all'
            }`}
          >
            Kain Lotto
          </button>
        </div>
        <div className='mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {productTab === 'AllProducts' && (
            <>
              {loopData(SarungKursi, (item, key) => (
                <CardProduct key={key} productImage={'photography'} productName={item.name} productPrice={item.price} />
              ))}
              {loopData(RumbaiTenda, (item, key) => (
                <CardProduct key={key} productImage={'photography'} productName={item.name} productPrice={item.price} />
              ))}
              {loopData(Plafon, (item, key) => (
                <CardProduct key={key} productImage={'photography'} productName={item.name} productPrice={item.price} />
              ))}
              {loopData(CoverMeja, (item, key) => (
                <CardProduct key={key} productImage={'photography'} productName={item.name} productPrice={item.price} />
              ))}
            </>
          )}
          {productTab === 'SarungKursi' && (
            <>
              {loopData(SarungKursi, (item, key) => (
                <CardProduct key={key} productImage={'photography'} productName={item.name} productPrice={item.price} />
              ))}
            </>
          )}
          {productTab === 'RumbaiTenda' && (
            <>
              {loopData(RumbaiTenda, (item, key) => (
                <CardProduct key={key} productImage={'photography'} productName={item.name} productPrice={item.price} />
              ))}
            </>
          )}
          {productTab === 'Plafon' && (
            <>
              {loopData(Plafon, (item, key) => (
                <CardProduct key={key} productImage={'photography'} productName={item.name} productPrice={item.price} />
              ))}
            </>
          )}
          {productTab === 'CoverMeja' && (
            <>
              {loopData(CoverMeja, (item, key) => (
                <CardProduct key={key} productImage={'photography'} productName={item.name} productPrice={item.price} />
              ))}
            </>
          )}
          {productTab === 'KainPelamin' && (
            <>
              {loopData(KainPelamin, (item, key) => (
                <CardProduct key={key} productImage={'photography'} productName={item.name} productPrice={item.price} />
              ))}
            </>
          )}
          {productTab === 'BackgroundDinding' && (
            <>
              {loopData(BackgroundDinding, (item, key) => (
                <CardProduct productImage={'photography'} key={key} productName={item.name} productPrice={item.price} />
              ))}
            </>
          )}
          {productTab === 'DekorasiLengkap' && (
            <>
              {loopData(DekorasiLengkap, (item, key) => (
                <CardProduct productImage={'photography'} key={key} productName={item.name} productPrice={item.price} />
              ))}
            </>
          )}
          {productTab === 'TerpalTenda' && (
            <>
              {loopData(TerpalTenda, (item, key) => (
                <CardProduct key={key} productImage={'photography'} productName={item.name} productPrice={item.price} />
              ))}
            </>
          )}
          {productTab === 'KainLotto' && (
            <>
              {loopData(KainLotto, (item, key) => (
                <CardProduct key={key} productImage={'photography'} productName={item.name} productPrice={item.price} />
              ))}
            </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
