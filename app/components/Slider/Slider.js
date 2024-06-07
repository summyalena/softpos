'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import styles from "./slider.module.css";
import Container from "../ui/Container";
import trustedby from "../utils/trustedBy";

function TrustedBy() {
  return (
    <Container className={`${styles.trustedby}`}>
      <h6 className="flex text-center">More than 20+ Brands Trusted Using SoftPOS</h6>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          280: {
            slidesPerView: 1.5,
            spaceBetween: 27,
            width: 280,
          },
          360: {
            slidesPerView: 2,
            spaceBetween: 25,
            width: 360,
          },
          375: {
            slidesPerView: 1.5,
            spaceBetween: 40,
          },
          540: {
            slidesPerView: 2.5,
            spaceBetween: 35,
          },
          680: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
          820: {
            slidesPerView: 3,
            spaceBetween: 35,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 45,
          },
          1120: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        loop={true}
        centeredSlides 
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={`${styles.slideContainer}`}
      >
        {trustedby.map((trustee) => (
          <SwiperSlide className={styles.slide} key={trustee.id}>
            <Image src={trustee.image} alt={trustee.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default TrustedBy;