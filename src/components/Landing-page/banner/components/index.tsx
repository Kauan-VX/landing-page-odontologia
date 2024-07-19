import { Image } from '@nextui-org/react'

export interface PropsCardBanner {
  icon: string
  title: string
  subtitle: string
  text: string
  index?: number
}

export default function CardBanner({
  icon,
  title,
  subtitle,
  text,
}: PropsCardBanner) {
  return (
    <div className="w-[280px] p-4 flex ">
      <div className="w-[30%]">
        <Image alt="Banner" width={42} height={50} src={icon} />
      </div>

      <div className="w-[70%] flex flex-col">
        <h1 className="font-bold">{title}</h1>

        <p>{subtitle}</p>

        <p> {text}</p>
      </div>
    </div>
  )
}
