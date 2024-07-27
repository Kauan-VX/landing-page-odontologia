import { SERVICE } from 'public/constants/service'
import CardService from './card-service'

export default function OtherServices() {
  return (
    <section
      className="w-full flex flex-col p-8 justify-center dark:bg-service-dark light:bg-service-light bg-no-repeat bg-auto bg-right container mb-[5%]
    "
    >
      <header className="mb-20">
        <p className="subtitle  ">Especialidades</p>
        <h1 className="title">Outros serviços</h1>
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
