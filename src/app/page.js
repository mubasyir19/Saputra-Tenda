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
          <div className='card-category relative '>
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
      <section id='testimonials' className='w-full py-12 bg-[#585B56]' style={poppins.style}>
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
      <section className='py-20'>
        <div className='flex justify-center'>
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
        </div>
        <div className='w-full px-28 mt-12 grid grid-cols-3 gap-x-6'>
          <div className='card-contact w-full p-4 bg-[#F0F2EF]'>
            <div className='text-center text-black'>
              <svg
                width='24'
                height='18'
                viewBox='0 0 24 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mx-auto'
              >
                <path
                  d='M22 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H22C23.1 18 23.99 17.1 23.99 16L24 2C24 0.9 23.1 0 22 0ZM22 16H2V2H22V16ZM19.01 14.99L21 13L19.49 11H17.85C17.63 10.37 17.5 9.7 17.5 9C17.5 8.3 17.63 7.63 17.85 7H19.49L21 5L19.01 3.01C17.7 3.99 16.73 5.38 16.28 7C16.1 7.64 16 8.31 16 9C16 9.69 16.1 10.36 16.28 11C16.73 12.61 17.7 14.01 19.01 14.99ZM9 9C10.65 9 12 7.65 12 6C12 4.35 10.65 3 9 3C7.35 3 6 4.35 6 6C6 7.65 7.35 9 9 9ZM9 5C9.55 5 10 5.45 10 6C10 6.55 9.55 7 9 7C8.45 7 8 6.55 8 6C8 5.45 8.45 5 9 5ZM15 13.59C15 11.09 11.03 10.01 9 10.01C6.97 10.01 3 11.09 3 13.59V15H15V13.59ZM5.48 13C6.22 12.5 7.7 12 9 12C10.3 12 11.77 12.49 12.52 13H5.48Z'
                  fill='#0C0C0C'
                />
              </svg>

              <p className='mt-3 text-base font-bold'>Call Us</p>
              <p className='mt-3 text-xs'>We&apos;re Here To Talk To You</p>
            </div>
            <button className='w-full mt-3 p-2 text-center border-2 border-[#5A6D57] text-[#5A6D57] text-sm hover:bg-[#5A6D57] hover:text-white hover:transition-all'>
              +62 87774026818
            </button>
          </div>
          <div className='card-contact w-full p-4 bg-[#F0F2EF]'>
            <div className='text-center text-black'>
              <svg
                width='22'
                height='18'
                viewBox='0 0 20 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mx-auto'
              >
                <path
                  d='M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 6.99L2 2H18ZM18 14H2V4L10 9L18 4V14Z'
                  fill='#0C0C0C'
                />
              </svg>

              <p className='mt-3 text-base font-bold'>Email Us</p>
              <p className='mt-3 text-xs'>You are welcome to send us an email</p>
            </div>
            <button className='w-full mt-3 p-2 text-center border-2 border-[#5A6D57] text-[#5A6D57] text-sm hover:bg-[#5A6D57] hover:text-white hover:transition-all'>
              Send Email
            </button>
          </div>
          <div className='card-contact w-full p-4 bg-[#F0F2EF]'>
            <div className='text-center text-black'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mx-auto'
              >
                <path
                  d='M22 3H2C0.9 3 0 3.9 0 5V19C0 20.1 0.9 21 2 21H22C23.1 21 23.99 20.1 23.99 19L24 5C24 3.9 23.1 3 22 3ZM22 19H2V5H22V19ZM19.01 17.99L21 16L19.49 14H17.85C17.63 13.37 17.5 12.7 17.5 12C17.5 11.3 17.63 10.63 17.85 10H19.49L21 8L19.01 6.01C17.7 6.99 16.73 8.38 16.28 10C16.1 10.64 16 11.31 16 12C16 12.69 16.1 13.36 16.28 14C16.73 15.61 17.7 17.01 19.01 17.99ZM9 12C10.65 12 12 10.65 12 9C12 7.35 10.65 6 9 6C7.35 6 6 7.35 6 9C6 10.65 7.35 12 9 12ZM9 8C9.55 8 10 8.45 10 9C10 9.55 9.55 10 9 10C8.45 10 8 9.55 8 9C8 8.45 8.45 8 9 8ZM15 16.59C15 14.09 11.03 13.01 9 13.01C6.97 13.01 3 14.09 3 16.59V18H15V16.59ZM5.48 16C6.22 15.5 7.7 15 9 15C10.3 15 11.77 15.49 12.52 16H5.48Z'
                  fill='#0C0C0C'
                />
              </svg>
              <p className='mt-3 text-base font-bold'>Call Us</p>
              <p className='mt-3 text-xs'>We&apos;re Here To Talk To You</p>
            </div>
            <button className='w-full mt-3 p-2 text-center border-2 border-[#5A6D57] text-[#5A6D57] text-sm hover:bg-[#5A6D57] hover:text-white hover:transition-all'>
              +62 87774026818
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
