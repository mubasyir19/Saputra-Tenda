import { Bilbo_Swash_Caps } from "next/font/google";
import Image from "next/image";

const bilboSwashCaps = Bilbo_Swash_Caps({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function CardProduct({
  productImage,
  productName,
  productPrice,
}) {
  return (
    <div className="card-product flex h-fit w-full flex-col rounded-lg bg-white drop-shadow-lg md:w-36 lg:w-40 xl:w-56">
      {productImage.length > 0 ? (
        <>
          <Image
            src={productImage[0]}
            height={130}
            width={130}
            alt="product"
            className="h-60 w-full object-cover"
          />
        </>
      ) : (
        <div className="flex h-60 w-full items-center justify-center bg-slate-300">
          <p style={bilboSwashCaps.style} className="text-center text-3xl">
            PT Saputra <br /> Tenda <br /> Sejahtera
          </p>
        </div>
      )}
      <div className="p-2">
        <p className="h-14 text-xs">{productName}</p>
        <p className="mt-1 font-bold md:text-xs lg:text-sm">{productPrice}</p>
      </div>
    </div>
  );
}
