import Image from 'next/image'

export default function Doctor() {
  return (
    <section className="w-full flex items-center p-8 justify-center">
      <div className="w-1/2">
        <Image
          className="object-cover w-full"
          src={'/landing-page/doctor/doctor.png'}
          width={760}
          height={810}
          alt="Doutor(a)"
        />
      </div>
      <div className="w-1/2 flex flex-col  p-8 ">
        <header className=" flex flex-col gap-4 mb-8">
          <p className="text-light-blue">Sobre mim</p>
          <h1 className="text-navy-blue font-bold text-6xl">
            Dra. Patricia Nieves <br /> Kiriaco
          </h1>
        </header>
        <ul className="list-disc ml-4">
          <li>
            Médica Cirujano, graduada en la Universidad Nacional de Córdoba,
            Argentina.
          </li>
          <li>Odontóloga, graduada en la Universidad de París, Francia</li>
          <li>
            Docente de la Universidad Nacional de Córdoba desde el año 1975
          </li>
          <li>Miembro de las siguientes Academias:</li>
        </ul>
        <ul className="list-disc ml-10 mt-1">
          <li>A.L.A.O: Academia Latinoamericana de Oseointegración.</li>
          <li>
            A.I.I.O: Academia Internacional de Implantes y Oseointegración .
            Miembro Fundador
          </li>
          <li>
            A.V.O.I.O: Academia Venezolana de Oseointegración e Implantologìa
            Oral. Miembro Honorario.
          </li>
          <li>
            Pierre Fauchard Academy: Academia de Honor de Odontologìa de
            E.E.U.U.
          </li>
          <li>
            A.I.I.P: Academia Internacional de Implantología y Periodoncia –
            Barcelona. Presidente Internacional.
          </li>
        </ul>
      </div>
    </section>
  )
}
