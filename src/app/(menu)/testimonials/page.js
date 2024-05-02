import React from "react";
import Image from "next/image";
import { reviews } from "@/services/reviews/reviews";
import Header from "@/components/Header";

export default function Testimonials() {
  return (
    <>
      <Header title="Testimonials" />
      <section className="my-16 grid grid-cols-1 gap-4 px-5 md:grid-cols-2 md:px-16 lg:grid-cols-3 lg:px-20 xl:grid-cols-4 xl:px-28">
        {reviews.map((item, i) => (
          <>
            <div
              key={i}
              className="card-review rounded-xl bg-white p-4 drop-shadow-lg"
            >
              <div className="head-card flex gap-x-2">
                <Image src={item.photo} height={32} width={32} alt="photo" />
                {/* <div className='h-8 w-8 rounded-full bg-gray-700 my-auto'></div> */}
                <p className="my-auto text-sm">{item.account}</p>
              </div>
              <div className="mt-3 text-sm lg:text-base">
                <p>{item.comment}</p>
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  );
}
