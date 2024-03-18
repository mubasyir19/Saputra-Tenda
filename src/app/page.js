import Chat from '@/components/Chat';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Bilbo_Swash_Caps, Poppins, Yeseva_One } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const bilboSwashCaps = Bilbo_Swash_Caps({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

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

export default function Home() {
  return (
    <main className='relative'>
      <Chat />
      <header
        className='h-screen relative bg-cover bg-center text-white'
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/background.jpg')",
        }}
      >
        <Navbar />
        <section className='h-screen flex justify-center items-center text-center'>
          <div>
            <h1 className='text-8xl italic' style={bilboSwashCaps.style}>
              Pt Saputra Tenda Sejahtera
            </h1>
            <p className='mt-6 text-xl' style={poppins.style}>
              Konveksi pembuat perlengkapan kain untuk dekorasi tenda, hotel, dan kantor.
            </p>
          </div>
        </section>
      </header>
      <section className='my-20 flex justify-center gap-x-11' style={poppins.style}>
        <div>
          <h3 className='text-3xl font-semibold text-[#576250]' style={yesevaOne.style}>
            Best Seller
          </h3>
          <p className='text-[#B8C1B2]'>Our best selling products</p>
        </div>
        <div className='flex gap-x-4 text-[#90998B]'>
          <div className='card w-fit p-3 bg-white text-center drop-shadow-lg rounded-lg'>
            <Image src='/images/photography.png' height={223} width={210} alt='photography' className='rounded-lg' />
            <p className='mt-4'>Rumbai Tenda</p>
          </div>
          <div className='card w-fit p-3 bg-white text-center drop-shadow-lg rounded-lg'>
            <Image src='/images/ceremony.png' height={223} width={210} alt='photography' className='rounded-lg' />
            <p className='mt-4'>Plafon Datar</p>
          </div>
          <div className='card w-fit p-3 bg-white text-center drop-shadow-lg rounded-lg'>
            <Image src='/images/wedding-design.png' height={223} width={210} alt='photography' className='rounded-lg' />
            <p className='mt-4'>Set Dekorasi</p>
          </div>
        </div>
      </section>
      <section className='my-20' style={poppins.style}>
        <div className='text-center'>
          <h3 className='text-3xl font-semibold text-[#576250]' style={yesevaOne.style}>
            Categories
          </h3>
          <p className='text-[#B8C1B2]'>Our Category Products</p>
        </div>
        <div className='mt-6 w-fit container mx-auto grid grid-cols-4 gap-3 justify-items-center'>
          <div className='card-category relative'>
            <Image
              src='/images/category.png'
              height={153}
              width={248}
              alt='category'
              className='rounded-lg drop-shadow-lg'
            />
            <p className='absolute bottom-2 left-3 text-white text-sm'>Sarung Kursi</p>
          </div>
          <div className='card-category relative'>
            <Image
              src='/images/category.png'
              height={153}
              width={248}
              alt='category'
              className='rounded-lg drop-shadow-lg'
            />
            <p className='absolute bottom-2 left-3 text-white text-sm'>Rumbai / Poni Tenda</p>
          </div>
          <div className='card-category relative'>
            <Image
              src='/images/category.png'
              height={153}
              width={248}
              alt='category'
              className='rounded-lg drop-shadow-lg'
            />
            <p className='absolute bottom-2 left-3 text-white text-sm'>Plafon Dekorasi Tenda</p>
          </div>
          <div className='card-category relative'>
            <Image
              src='/images/category.png'
              height={153}
              width={248}
              alt='category'
              className='rounded-lg drop-shadow-lg'
            />
            <p className='absolute bottom-2 left-3 text-white text-sm'>Cover Meja</p>
          </div>
          <div className='card-category relative'>
            <Image
              src='/images/category.png'
              height={153}
              width={248}
              alt='category'
              className='rounded-lg drop-shadow-lg'
            />
            <p className='absolute bottom-2 left-3 text-white text-sm'>Kain Pelamin</p>
          </div>
          <div className='card-category relative'>
            <Image
              src='/images/category.png'
              height={153}
              width={248}
              alt='category'
              className='rounded-lg drop-shadow-lg'
            />
            <p className='absolute bottom-2 left-3 text-white text-sm'>Background Dinding</p>
          </div>
          <div className='card-category relative'>
            <Image
              src='/images/category.png'
              height={153}
              width={248}
              alt='category'
              className='rounded-lg drop-shadow-lg'
            />
            <p className='absolute bottom-2 left-3 text-white text-sm'>Dekorasi Tenda Lengkap</p>
          </div>
          <div className='card-category relative'>
            <Image
              src='/images/category.png'
              height={153}
              width={248}
              alt='category'
              className='rounded-lg drop-shadow-lg'
            />
            <p className='absolute bottom-2 left-3 text-white text-sm'>Preorder</p>
          </div>
        </div>
      </section>
      <section className='w-full py-12 bg-[#585B56]' style={poppins.style}>
        <div className='text-white text-center'>
          <h3 className='text-3xl font-semibold' style={yesevaOne.style}>
            Testimonials
          </h3>
          <p className='text-[#B8C1B2]'>from happy, delighted couples</p>
        </div>
        <div className='flex justify-center gap-x-4'>
          <p className='mt-8 text-9xl text-[#464C43]' style={yesevaOne.style}>
            “
          </p>
          <p className='w-1/2 my-12 text-base 2 text-center text-white'>
            Lorem ipsum sit ac suspendisse adipiscing eget aliquam fermentum rutrum tempus aenean. Suspendisse nascetur
            vulputate viverra varius eu ullamcorper. Cursus pellentesque erat eget eget ullamcorper id in. Nullam
            scelerisque varius viverra augue quis. Laoreet eget curabitur vitae sed at facilisis purus convallis
            imperdiet. Penatibus auctor diam vivamus amet a vehicula ultrices. Volutpat arcu in amet praesent nisl
            mattis etiam cras orci. Ut urna elementum sapien orci lacus!
          </p>
          <p className='mt-8 text-9xl text-[#464C43]' style={yesevaOne.style}>
            ”
          </p>
        </div>
        <div className='flex justify-center'>
          <div className='text-white flex gap-x-4'>
            <div className='h-[2px] w-8 my-auto bg-white'></div>
            <p className='my-auto text-lg '>Mahdy Mubasyir </p>
            <div className='h-[2px] w-8 my-auto bg-white'></div>
          </div>
        </div>
      </section>
      <section className='py-12 flex justify-center'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6908676935172!2d106.9467042748299!3d-6.3042859936849105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69928569a1c79d%3A0x9eb3424e56a9e37f!2sSAPUTRA%20TENDA!5e0!3m2!1sid!2sid!4v1710692251259!5m2!1sid!2sid'
          className='w-full h-[500px] lg:w-[1300px] lg:h-[450px]'
          // width='600'
          // height='450'
          // style='border:0;'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </section>
      <Footer />
    </main>
  );
}
