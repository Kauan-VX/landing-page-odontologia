'use client'

import { Button, Link } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FlipWords } from 'src/components/ui/flip-words'
import { staggerContainer } from 'src/utils/motion'

export default function Presentation() {
  const words = [
    'Odontológica',
    'Inovadora',
    'Profissional',
    'Agradável',
    'Confortável',
  ]
  return (
    <motion.section
      className="w-full h-heightLessNav p-8  flex items-center justify-center lgMax:flex-col-reverse overflow-hidden container mt-8
      "
      variants={staggerContainer(1, 2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="w-1/2 flex  flex-col lgMax:w-full lgMax:mt-8  lgMax:pl-0">
        <p className="text-main-color ">No Rio de Janeiro</p>

        <header className="flex flex-col my-12  ">
          <h1 className="l leading-snug smMax:text-5xl smMax:leading-normal bigphoneMax:text-4xl">
            Uma excelente experiência
            <br />
            <span>
              <FlipWords
                className="text-main-color font-bold text-6xl smMax:text-5xl bigphoneMax:text-4xl"
                words={words}
              />
            </span>
          </h1>
        </header>

        <p className="dark:text-dark-text text-light-text my-4 w-[70%] lgMax:w-full">
          Lorem ipsum dolor sit amet consectetur adipiscing elit molestie,
          rhoncus luctus arcu ut eros augue. Eu commodo laoreet parturient quam
          purus magna pretium luctus.
        </p>

        <div className="flex justify-evenly items-center w-[70%] lgMax:w-full lgMax:justify-between lgMax:flex-wrap smphoneMax:gap-2">
          <Button className="btn-light-blue" variant="shadow">
            Sua vez
          </Button>
          <Link className="link-simple-gray">Outros Serviços</Link>
        </div>
      </div>

      <motion.div className="w-1/2 lgMax:w-full lgMin:hidden  relative">
        {/* variants={fadeIn2('left', 'tween', 0.2, 1)} */}
        <motion.picture className="flex justify-center">
          <Image
            className="w-full object-cover max-w-[400px] rounded-3xl z-[2]"
            alt="Banner"
            width={590}
            height={890}
            src={'/landing-page/presentation/banner-presentation.png'}
          />
        </motion.picture>

        <div className="bg-gradient-to-b from-light-blue to-main-color smMax:top-[-15%] smMax:right-[-40%] lgMax:size-[1000px] lgMax:top-[-66%] lgMax:right-[-17%] size-[800px] bigphoneMax:size-[800px] bigphoneMax:right-[-27%] bigphoneMax:top-[-32%] rounded-full absolute top-0"></div>
      </motion.div>

      <motion.div className="w-1/2   lgMax:hidden relative flex justify-center items-center">
        <div className="bg-gradient-to-b from-light-blue to-main-color w-[650px] h-[650px] rounded-full flex justify-center items-center">
          <Image
            className="object-cover max-w-[400px] rounded-3xl z-[2]"
            alt="Banner"
            width={590}
            height={890}
            src={'/landing-page/presentation/banner-presentation.png'}
          />
        </div>
      </motion.div>
    </motion.section>
  )
}
