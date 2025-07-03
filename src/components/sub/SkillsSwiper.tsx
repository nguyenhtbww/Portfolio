"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SkillDataProvider from "./SkillDataProvider";
import { Frontend_skill } from "@/constants";
import { Backend_skill } from "@/constants";
import type { Swiper as SwiperType } from "swiper";

const SkillsSwiper = () => {
    const swiperRef1 = useRef<SwiperType | null>(null);
    const swiperRef2 = useRef<SwiperType | null>(null);

    return (
        <div className="max-w-[80%] mx-auto">
            {/* Swiper 1 - chạy từ phải sang trái */}
            <div
                onMouseEnter={() => swiperRef1.current?.autoplay?.stop()}
                onMouseLeave={() => swiperRef1.current?.autoplay?.start()}
            >
                <Swiper
                    onSwiper={(swiper) => (swiperRef1.current = swiper)}
                    loop
                    speed={3000} // tốc độ chậm tạo cảm giác trôi mượt
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: true,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 4 },
                        1024: { slidesPerView: 6 },
                        1280: { slidesPerView: 6 },
                    }}
                    modules={[Autoplay]}
                >
                    {Frontend_skill.map((image, index) => (
                        <SwiperSlide key={index} className="!flex !justify-center !items-center">
                            <div className="transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-xl cursor-pointer">
                                <SkillDataProvider
                                    src={image.Image}
                                    width={image.width}
                                    height={image.height}
                                    index={index}
                                />
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>

            <br /><br /><br />

            {/* Swiper 2 - chạy từ trái sang phải */}
            <div
                onMouseEnter={() => swiperRef2.current?.autoplay?.stop()}
                onMouseLeave={() => swiperRef2.current?.autoplay?.start()}
            >
                <Swiper
                    onSwiper={(swiper) => (swiperRef2.current = swiper)}
                    loop
                    speed={3000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 4 },
                        1024: { slidesPerView: 6 },
                        1280: { slidesPerView: 6 },
                    }}
                    modules={[Autoplay]}
                >
                    {Backend_skill.map((image, index) => (
                        <SwiperSlide key={index} className="!flex !justify-center !items-center">
                            <div className="transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-xl cursor-pointer">
                                <SkillDataProvider
                                    src={image.Image}
                                    width={image.width}
                                    height={image.height}
                                    index={index}
                                />
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SkillsSwiper;
