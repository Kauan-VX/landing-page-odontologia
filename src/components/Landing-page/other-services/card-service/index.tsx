'use client'
import { Link } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export interface PropsCardService {
  icon: string
  title: string
  text: string
  link: string
  index?: number
}

export default function CardService({
  icon,
  title,
  text,
  link,
  index,
}: PropsCardService) {
  const fadeInAnimationsVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * index,
      },
    }),
    exit: {
      opacity: 0,
      y: 100,
    },
  }
  return (
    <motion.div
      className="size-full  flex flex-col gap-4 p-4 rounded-2xl max-w-[500px] bg-[#FFF9FD] max-h-[500px] bigphoneMax:max-h-none "
      variants={fadeInAnimationsVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
        amount: 0.5,
      }}
      custom={index}
    >
      <Image
        className="object-cover"
        alt="Outros Serviços"
        width={94}
        height={100}
        src={icon}
      />

      <h1 className="font-bold text-main-color text-xl">{title}</h1>

      <p className="dark:text-dark-text text-light-text">{text}</p>

      <Link href={link}>Ver mais</Link>
    </motion.div>
  )
}
