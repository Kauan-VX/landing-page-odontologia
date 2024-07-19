'use client'
import { Button, Input, Textarea } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CONTACT } from 'public/constants/contact'
import { fadeIn2, planetVariants, staggerContainer } from 'src/utils/motion'
import CardContact from './card-contact'

export default function Contact() {
  return (
    <section className="w-full flex flex-col justify-center bg-bg-contact ">
      <div className="container">
        <header className="mb-20 flex flex-col items-end pt-8 pr-8">
          <p className="subtitle text-light-blue">Dê uma volta</p>
          <h1 className="title">Contato</h1>
        </header>
        <motion.div
          className="flex items-center justify-center  p-8 w-full lgMax:flex-col-reverse lgMax:p-0 overflow-x-hidden"
          variants={staggerContainer(1, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            variants={fadeIn2('right', 'tween', 0.2, 1)}
            className="w-[40%] lgMax:w-full lgMax:mt-8"
          >
            <div className="flex flex-col items-center justify-center gap-8 flex-wrap  w-full">
              {CONTACT.map((contact, index) => (
                <CardContact
                  key={index}
                  icon={contact.icon}
                  title={contact.title}
                  text={contact.text}
                  subtitle={contact.subtitle}
                  index={index}
                />
              ))}
            </div>

            <ul className="flex items-center w-full  justify-center gap-10 mt-16 bigphoneMax:gap-20">
              <li>
                <Image
                  width={40}
                  height={40}
                  alt="facebook"
                  src={'/landing-page/contact/facebook.svg'}
                />
              </li>
              <li>
                <Image
                  width={40}
                  height={40}
                  alt="linkedin"
                  src={'/landing-page/contact/linkedin.svg'}
                />
              </li>
              <li>
                <Image
                  width={40}
                  height={40}
                  alt="instagram"
                  src={'/landing-page/contact/instagram.svg'}
                />
              </li>
            </ul>
          </motion.div>
          <motion.div
            variants={planetVariants('right')}
            className="w-[60%] flex justify-end px-32 lgMax:w-full lgMax:px-0"
          >
            <form className="p-8 bg-diagonal-gradient rounded-md size-full flex flex-col gap-8 ">
              <h1 className="font-bold text-3xl text-white">
                Entre em contato conosco para <br /> marcar uma consulta.
              </h1>

              <div>
                <Input
                  classNames={{
                    label: 'text-white dark:text-white/90',
                  }}
                  label="Nome"
                  variant="underlined"
                />
                <Input
                  classNames={{
                    label: 'text-white dark:text-white/90',
                  }}
                  label="Email"
                  variant="underlined"
                />
                <Input
                  classNames={{
                    label: 'text-white dark:text-white/90',
                  }}
                  label="Telefone"
                  variant="underlined"
                />
                <Textarea
                  classNames={{
                    label: 'text-white dark:text-white/90',
                  }}
                  variant="underlined"
                  label="Problema"
                  labelPlacement="outside"
                  className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                />
              </div>
              <Button className="mt-8 w-full max-w-72 p-4 bg-white bigphoneMax:max-w-none">
                Enviar
              </Button>
            </form>
          </motion.div>
        </motion.div>
        <div className="mt-16">
          <iframe
            title="Mapa"
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.3736669067307!2d-42.971685723893785!3d-22.4149574204804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x984da4e55f0403%3A0x92566ad040cd04fe!2sNoclaf%20Tech!5e0!3m2!1spt-BR!2sbr!4v1721155290854!5m2!1spt-BR!2sbr"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
