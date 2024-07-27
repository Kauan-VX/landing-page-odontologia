import Image from 'next/image'

export interface PropsCardFeedBack {
  title: string
  text: string
  qtd_start: 1 | 2 | 3 | 4 | 5
  index?: number
}

export default function CardFeedback({
  title,
  text,
  qtd_start,
}: PropsCardFeedBack) {
  const stars = Array.from({ length: qtd_start }, (_, index) => (
    <Image
      key={index}
      alt="Estrela"
      width={26}
      height={25}
      src={'/landing-page/feedback/star.svg'}
    />
  ))
  return (
    <div className="size-full h-96 flex flex-col gap-4 p-4 rounded-2xl max-w-[400px] dark:bg-[#0b2745] bg-light-bg-card max-h-[230px] dark:shadow-dark-shadow-feedback shadow-light-shadow-feedback shadow-md">
      <header className="w-full flex items-center justify-between mb-4">
        <h2 className="text-lg">{title}</h2>
        <span className="flex items-center gap-2">{stars}</span>
      </header>
      <p className="dark:text-dark-text text-light-text">{text}</p>
    </div>
  )
}
