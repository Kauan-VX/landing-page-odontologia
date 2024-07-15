import { SERVICE } from 'public/constants/service'
import CardService from './card-service'

export default function OtherServices() {
  return (
    <section className="w-full flex flex-col p-8 justify-center">
      <header className="mb-20">
        <p>Especialidades</p>
        <h1 className="text-navy-blue font-bold text-6xl">Outros serviços</h1>
      </header>
      <div className="flex flex-row items-center justify-center gap-8 flex-wrap  w-full">
        {SERVICE.map((banner, index) => (
          <CardService
            key={index}
            icon={banner.icon}
            title={banner.title}
            link={banner.link}
            text={banner.text}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
