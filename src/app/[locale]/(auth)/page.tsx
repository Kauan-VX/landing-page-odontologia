'use client'

import Banner from 'src/components/Landing-page/banner'
import Clinic from 'src/components/Landing-page/clinic'
import Contact from 'src/components/Landing-page/contact'
import Doctor from 'src/components/Landing-page/doctor'
import Feedback from 'src/components/Landing-page/feedback'
import OtherServices from 'src/components/Landing-page/other-services'
import Presentation from 'src/components/Landing-page/presentation'
import Question from 'src/components/Landing-page/questions'

export default function Home() {
  return (
    <main className="">
      <Presentation />
      <Banner />
      <OtherServices />
      <Feedback />
      <Doctor />
      <Clinic />
      <Question />
      <Contact />
    </main>
  )
}
