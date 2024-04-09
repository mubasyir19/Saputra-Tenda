import Image from 'next/image';

export default function CardProduct({ productImage, productName, productPrice }) {
  return (
    <div className='card-product w-full h-fit  md:w-36 lg:w-40 xl:w-56 flex flex-col bg-white drop-shadow-lg rounded-lg'>
      <Image
        src={`/images/${productImage}.png`}
        height={130}
        width={130}
        alt='product'
        className='w-full h-fit object-cover'
      />
      <div className='p-2'>
        <p className='text-xs h-14'>{productName}</p>
        <p className='mt-1 font-bold md:text-xs lg:text-sm'>{productPrice}</p>
      </div>
    </div>
  );
}
