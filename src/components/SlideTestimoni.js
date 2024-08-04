"use client";

import { Poppins, Yeseva_One } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { reviews } from "@/services/reviews/reviews";

const yesevaOne = Yeseva_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function SlideTestimoni() {
  return (
    <section
      id="testimonials"
      className="w-full bg-[#585B56] py-12"
      style={poppins.style}
    >
      <div className="text-center text-white">
        <h3 className="text-3xl font-semibold" style={yesevaOne.style}>
          Testimonials
        </h3>
        <p className="text-[#B8C1B2]">from happy, satisfied customers</p>
      </div>
      <Swiper
        // navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((item, i) => (
          <>
            <SwiperSlide key={i}>
              <div className="flex justify-center gap-x-4">
                <p
                  className="mt-8 text-9xl text-[#464C43]"
                  style={yesevaOne.style}
                >
                  “
                </p>
                <p className="2 my-12 w-1/2 text-center text-base text-white">
                  {item.comment}
                </p>
                <p
                  className="mt-8 text-9xl text-[#464C43]"
                  style={yesevaOne.style}
                >
                  ”
                </p>
              </div>
              <div className="flex justify-center">
                <div className="flex gap-x-4 text-white">
                  <div className="my-auto h-[2px] w-8 bg-white"></div>
                  <p className="my-auto text-lg ">{item.account} </p>
                  <div className="my-auto h-[2px] w-8 bg-white"></div>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </section>
  );
}
