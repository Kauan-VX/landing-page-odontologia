import { Button, Link } from '@nextui-org/react'
import Image from 'next/image'

export default function Presentation() {
  return (
    <section className="size-full flex items-center justify-center">
      <div className="w-1/2 flex flex-col">
        <p className="text-main-color">No Rio de Janeiro</p>

        <header className="flex flex-col w-[70%]">
          <h1 className="text-navy-blue font-bold text-6xl leading-snug">
            Uma excelente experiencia{' '}
            <span className="text-main-color font-bold text-6xl">
              Odontológica
            </span>
          </h1>
        </header>

        <p className="dark:text-dark-text text-light-text my-4 w-[70%]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit molestie,
          rhoncus luctus arcu ut eros augue. Eu commodo laoreet parturient quam
          purus magna pretium luctus.
        </p>

        <div className="flex justify-evenly items-center w-[70%]">
          <Button className="bg-light-blue">Sua vez</Button>
          <Link>Outros Serviços</Link>
        </div>
      </div>

      <div className="w-1/2">
        <div className="size-full bg-gradient-to-b from-light-blue to-main-color  flex justify-center max-h-[890px] max-w-[890px]  rounded-full">
          <Image
            className="w-full max-w-96 z-[2]"
            alt="Banner"
            width={590}
            height={890}
            src={'/landing-page/presentation/banner-presentation.png'}
          />
        </div>
      </div>
    </section>
  )
}
