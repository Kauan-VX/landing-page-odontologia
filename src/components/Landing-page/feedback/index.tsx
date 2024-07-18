'use client'

import { Button } from '@nextui-org/react'
import { FEEDBACK } from 'public/constants/feedback'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardFeedback from './card-feedback'

export default function Feedback() {
  return (
    <section className="w-full flex flex-col p-8 justify-center container mb-[5%]">
      <header className=" flex flex-col items-center">
        <p className="text-light-blue">Testemunhos</p>
        <h1 className="text-navy-blue font-bold text-6xl">
          O que nossos pacientes dizem
        </h1>
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
          {FEEDBACK.map((feedback, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide md:basis-1/2 mdMax:!mr-0 mdMax:!flex mdMax:!justify-center lg:basis-1/3 mt-20 my-9"
            >
              <CardFeedback
                key={index}
                qtd_start={feedback.qtd_start}
                title={feedback.title}
                text={feedback.text}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Button className="mx-auto mt-8">Ver mais review(s)</Button>
    </section>
  )
}
