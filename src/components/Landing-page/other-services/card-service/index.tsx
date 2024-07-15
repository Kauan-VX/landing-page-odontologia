import { Link } from '@nextui-org/react'
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
}: PropsCardService) {
  return (
    <div className="size-full h-96 flex flex-col gap-4 p-4 rounded-2xl max-w-[500px] bg-[#FFF9FD] max-h-[500px]">
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
    </div>
  )
}
