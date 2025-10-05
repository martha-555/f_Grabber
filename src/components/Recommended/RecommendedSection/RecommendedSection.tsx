import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
import ArrowRight from '../../../assets/icons/arrow-right.svg?react'
import { RecommendedCard } from '../../index.ts'
import useFetchRecommended from '../../../api/useFetchRecommended.ts'
import 'swiper/css'
import 'swiper/css/navigation'

type RecommendedSectionProps = {
  text?: string
  slideView?: number
  variant?: 'home' | 'adPage'
  className?: string
}

const RecommendedSection = ({
  slideView,
  text,
  variant = 'home',
  className,
}: RecommendedSectionProps) => {
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const handleSwiper = (swiper: SwiperCore) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  const { data: recommendedAds, isLoading, isError } = useFetchRecommended()

  if (isLoading) return <p>Завантаження...</p>
  if (isError) return <p>Сталася помилка при завантаженні</p>

  return (
    <section className={`relative mx-auto mb-[96px] max-w-[1200px] ${className}`}>
      <h2 className="pb-8 text-h31">{text}</h2>

      <div className={variant === 'home' ? 'relative h-[491px]' : 'relative h-[513px]'}>
        <button
          className={`swiper-button-prev group absolute left-[-40px] top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-secondary-brown-100 transition-colors hover:text-secondary-brown-100 active:text-primary-950 ${
            isBeginning ? 'pointer-events-none opacity-0' : ''
          }`}
        ></button>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={slideView}
          slidesPerGroup={1}
          onSwiper={handleSwiper}
          onSlideChange={handleSwiper}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: slideView,
            },
          }}
          className="p-6"
        >
          {recommendedAds?.map((ad) => (
            <SwiperSlide key={ad.id}>
              <RecommendedCard key={ad.id} ad={ad} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={`swiper-button-next group absolute right-[-40px] top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-secondary-brown-100 transition-colors hover:text-secondary-brown-100 active:text-primary-950 ${
            isEnd ? 'pointer-events-none opacity-0' : ''
          }`}
        >
          <ArrowRight className="arrowIcon" />
        </button>
      </div>
    </section>
  )
}

export default RecommendedSection
