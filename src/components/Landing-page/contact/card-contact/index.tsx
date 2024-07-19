import Image from 'next/image'

export interface PropsCardContact {
  icon: string
  title: string
  text: string
  subtitle?: string
  index?: number
}

export default function CardContact({
  icon,
  title,
  text,
  subtitle,
}: PropsCardContact) {
  return (
    <div className="size-full flex  gap-4 p-4  max-w-[350px]  border-b-[0.6px] dark:border-dark-bg-banner border-light-bg-banner">
      <Image
        className="w-full max-w-14 object-cover"
        width={40}
        height={40}
        alt="Icon"
        src={icon}
      />
      <span>
        <h3 className="font-medium">{title}</h3>
        <p className="dark:text-dark-text text-light-text">{text}</p>
        <p className="dark:text-dark-text text-light-text">{subtitle || ''}</p>
      </span>
    </div>
  )
}
