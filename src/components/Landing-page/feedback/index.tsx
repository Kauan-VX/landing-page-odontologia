'use client'

import { Button } from '@nextui-org/react'
import { FEEDBACK } from 'public/constants/feedback'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardFeedback from './card-feedback'

export default function Feedback() {
  const [all, setAll] = useState(false)

  function handleAllReview() {
    setAll((prevAll) => !prevAll)
  }

  return (
    <section className="w-full flex flex-col p-8 justify-center container mb-[5%]">
      <header className="flex flex-col items-center">
        <p className="subtitle">Testemunhos</p>
        <h1 className="title text-center">O que nossos pacientes dizem</h1>
      </header>

      {all ? (
        <div className="flex flex-row items-center justify-center gap-8 flex-wrap w-full mt-12">
          {FEEDBACK.map((feedback, index) => (
            <CardFeedback
              key={index}
              qtd_start={feedback.qtd_start}
              title={feedback.title}
              text={feedback.text}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center gap-8 flex-wrap w-full">
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
      )}

      <Button
        onClick={handleAllReview}
        className="btn-border-light-blue mx-auto mt-8"
      >
        {all ? 'Ver menos review(s)' : 'Ver mais review(s)'}
      </Button>
    </section>
  )
}
