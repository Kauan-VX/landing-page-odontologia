'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'

import { CLINIC_SLIDER } from 'public/constants/clinic-slider'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

export default function Clinic() {
  return (
    <section className="w-full flex flex-col p-8 justify-center bg-clinic-bg bg-no-repeat bg-auto bg-right-top container">
      <header className="mb-10">
        <p className="subtitle text-light-blue">Instalações</p>
        <h1 className="title">Nossa Clínica</h1>
      </header>
      <div className="flex flex-row items-center justify-center gap-8 flex-wrap  w-full">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="swiper mySwiper overflow-visible h-full w-full bg-gradient-to-left from-black to-transparent bg-none"
        >
          {CLINIC_SLIDER.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide md:basis-1/2 mdMax:!mr-0 mdMax:!flex mdMax:!justify-center lg:basis-1/3 mt-20 my-9"
            >
              <Image
                className=""
                key={index}
                src={slide.image}
                width={700}
                height={700}
                alt="Slider"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
