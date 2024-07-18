import { Accordion, AccordionItem } from '@nextui-org/react'
import { QUESTION } from 'public/constants/question'

export default function Question() {
  return (
    <section className="w-full flex flex-col p-8 justify-center bg-bg-question container">
      <header className="mb-20 flex flex-col items-center">
        <p className="subtitle text-light-blue">Tire suas dúvidas</p>
        <h1 className="title text-center">Perguntas frequentes</h1>
      </header>
      <div className="flex flex-row items-center justify-center gap-8 flex-wrap  w-full">
        <Accordion
          variant="splitted"
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: 'auto',
                transition: {
                  height: {
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: 'ease',
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: 'ease',
                    duration: 0.25,
                  },
                  opacity: {
                    easings: 'ease',
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          {QUESTION.map((question, index) => (
            <AccordionItem
              className="dark:shadow-dark-shadow-feedback shadow-light-shadow-feedback shadow-md py-1 px-4 rounded-2xl mt-4"
              key={index}
              aria-label={question.question}
              title={question.question}
            >
              {question.response}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
