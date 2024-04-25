import Image from "next/image";

export default function CardProduct({
  productImage,
  productName,
  productPrice,
}) {
  return (
    <div className="card-product flex h-fit w-full flex-col rounded-lg bg-white drop-shadow-lg md:w-36 lg:w-40 xl:w-56">
      <Image
        src={`/images/${productImage}.png`}
        height={130}
        width={130}
        alt="product"
        className="h-fit w-full object-cover"
      />
      <div className="p-2">
        <p className="h-14 text-xs">{productName}</p>
        <p className="mt-1 font-bold md:text-xs lg:text-sm">{productPrice}</p>
      </div>
    </div>
  );
}
