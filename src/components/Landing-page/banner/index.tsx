import { BANNER } from '../../../../public/constants/banner'
import CardBanner from './components'

export default function Banner() {
  return (
    <section className="w-full  p-2  flex items-center justify-center dark:bg-[#0c2d58] bg-light-bg-banner mt-[3%]">
      <div className="flex container flex-row items-center justify-evenly  flex-wrap  w-full">
        {BANNER.map((banner, index) => (
          <CardBanner
            key={index}
            icon={banner.icon}
            title={banner.title}
            subtitle={banner.subtitle}
            text={banner.text}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
