"use client";

import React from "react";
import { Heading } from "../reusables/Heading";
import { testimonials } from "@/utils/Testimonial";
import { Star } from "../reusables/Star";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const TestimonialSection = () => {
  return (
    <div>
      <Heading
        text="Hear from Other Happy Parents"
        subText="Customer testimonials"
      />
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={24}
        pagination={{ clickable: true }}
        style={{ padding: "2rem 0" }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-[#FAEFEF] rounded-md py-4 px-8 text-sm md:text-base w-full">
              <Star rating={5} />
              <p className="text-[#4A4748] my-2">{item.review}</p>
              <div className="text-xs md:text-sm flex items-center gap-6 my-2">
                <Image
                  src={item.img}
                  alt="Image testimonial"
                  priority
                  className="w-auto h-10 rounded-full"
                />
                <p>{item.name}</p>
                <p>{item.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
