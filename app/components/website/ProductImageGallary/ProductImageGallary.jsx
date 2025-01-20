"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import styles from "./ProductImageGallary.module.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ProductImageGallary(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-96 w-full rounded-lg"
      >
        {props.images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={image}
                alt={image}
                width={100}
                height={100}
                className={styles.productImg}
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs mt-3 h-32 w-full rounded-lg"
      >
        {props.images.map((image, index) => (
          <SwiperSlide key={index}>
            <button className="flex h-full w-full items-center justify-center">
              <Image
                src={image}
                alt={image}
                width={100}
                height={100}
                className="block h-full w-full object-contain"
                priority
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
