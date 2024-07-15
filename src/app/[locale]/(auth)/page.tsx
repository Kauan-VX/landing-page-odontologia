'use client'

import Banner from 'src/components/Landing-page/banner'
import OtherServices from 'src/components/Landing-page/other-services'
import Presentation from 'src/components/Landing-page/presentation'

export default function Home() {
  return (
    <main>
      <Presentation />
      <Banner />
      <OtherServices />
    </main>
  )
}
