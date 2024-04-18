import React from 'react';
import Image from 'next/image';
import { reviews } from '@/services/reviews/reviews';
import Header from '@/components/Header';

export default function Testimonials() {
  return (
    <>
      <Header title='Testimonials' />
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-5 md:px-16 lg:px-20 xl:px-28 my-16'>
        {reviews.map((item, i) => (
          <>
            <div key={i} className='card-review bg-white drop-shadow-lg p-4 rounded-xl'>
              <div className='head-card flex gap-x-2'>
                <Image src={item.photo} height={32} width={32} alt='photo' />
                {/* <div className='h-8 w-8 rounded-full bg-gray-700 my-auto'></div> */}
                <p className='text-sm my-auto'>{item.account}</p>
              </div>
              <div className='mt-3'>
                <p>{item.comment}</p>
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  );
}
