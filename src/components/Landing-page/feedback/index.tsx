import { Button } from '@nextui-org/react'
import { FEEDBACK } from 'public/constants/feedback'
import CardFeedback from './card-feedback'

export default function Feedback() {
  return (
    <section className="w-full flex flex-col p-8 justify-center">
      <header className="mb-20 flex flex-col items-center">
        <p className="text-light-blue">Testemunhos</p>
        <h1 className="text-navy-blue font-bold text-6xl">
          O que nossos pacientes dizem
        </h1>
      </header>
      <div className="flex flex-row items-center justify-center gap-8 flex-wrap  w-full">
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

      <Button className="mx-auto mt-8">Ver mais review(s)</Button>
    </section>
  )
}
