import { Button, Input, Textarea } from '@nextui-org/react'
import Image from 'next/image'
import { CONTACT } from 'public/constants/contact'
import CardContact from './card-contact'

export default function Contact() {
  return (
    <section className="w-full flex flex-col justify-center bg-bg-contact">
      <header className="mb-20 flex flex-col items-end pt-8 pr-8">
        <p className="text-light-blue">Dê uma volta</p>
        <h1 className="text-navy-blue font-bold text-6xl">Contato</h1>
      </header>
      <div className="flex items-center justify-center gap-8  p-8 w-full">
        <div className="w-[40%]">
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

          <ul className="flex ml-[200px] items-center w-full max-w-[400px]  justify-evenly mt-16">
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
        </div>
        <div className="w-[60%] flex justify-end px-52">
          <form className="p-8 bg-diagonal-gradient rounded-md size-full flex flex-col gap-8">
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
            <Button className="mt-8 w-full max-w-72 p-4 bg-white">
              Enviar
            </Button>
          </form>
        </div>
      </div>
      <div className="mt-16">
        <iframe
          className="w-full h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.3736669067307!2d-42.971685723893785!3d-22.4149574204804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x984da4e55f0403%3A0x92566ad040cd04fe!2sNoclaf%20Tech!5e0!3m2!1spt-BR!2sbr!4v1721155290854!5m2!1spt-BR!2sbr"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}
