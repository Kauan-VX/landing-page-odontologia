import Image from 'next/image'

export default function Doctor() {
  return (
    <section className="w-full flex items-center p-8 justify-center lgMax:flex-col container mb-[5%]">
      <div className="w-1/2 lgMax:w-full">
        <Image
          className="object-cover w-full"
          src={'/landing-page/doctor/doctor.png'}
          width={760}
          height={810}
          alt="Doutor(a)"
        />
      </div>
      <div className="w-1/2 lgMax:w-full flex flex-col  p-8 ">
        <header className="flex flex-col gap-4 mb-8">
          <p className="subtitle">Sobre mim</p>
          <h1 className="title">
            Dra. Patricia Nieves <br /> Kiriaco
          </h1>
        </header>
        <ul className="list-disc ml-4">
          <li>
            Médica Cirurgiã, graduada na Universidade Nacional de Córdoba,
            Argentina.
          </li>
          <li>Odontóloga, graduada na Universidade de Paris, França</li>
          <li>
            Docente da Universidade Nacional de Córdoba desde o ano de 1975
          </li>
          <li>Membro das seguintes Academias:</li>
        </ul>
        <ul className="list-disc ml-10 mt-1">
          <li>A.L.A.O: Academia Latino-americana de Osseointegração.</li>
          <li>
            A.I.I.O: Academia Internacional de Implantes e Osseointegração.
            Membro Fundador.
          </li>
          <li>
            A.V.O.I.O: Academia Venezuelana de Osseointegração e Implantologia
            Oral. Membro Honorário.
          </li>
          <li>
            Pierre Fauchard Academy: Academia de Honra de Odontologia dos E.U.A.
          </li>
          <li>
            A.I.I.P: Academia Internacional de Implantologia e Periodontia –
            Barcelona. Presidente Internacional.
          </li>
        </ul>
      </div>
    </section>
  )
}
