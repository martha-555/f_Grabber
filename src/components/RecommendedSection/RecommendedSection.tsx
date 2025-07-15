import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg?react'
import ArrowRight from '../../assets/icons/arrow-right.svg?react'
import { RecommendedCard } from '../../components'
import useFetchRecommended from '../../api/useFetchRecommended'
import 'swiper/css'
import 'swiper/css/navigation'

const RecommendedSection = () => {
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
    <section className="relative mx-auto h-[565px] max-w-[1200px]">
      <h2 className="pb-8 text-center text-h3">Вам може сподобатися</h2>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2}
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
              slidesPerView: 2,
            },
          }}
        >
          {recommendedAds?.map((ad) => (
            <SwiperSlide key={ad.id}>
              <RecommendedCard ad={ad} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={`swiper-button-prev group absolute left-[-40px] top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-grey-50 transition-colors hover:text-grey-100 active:text-grey-200 ${
            isBeginning ? 'pointer-events-none opacity-0' : ''
          }`}
        >
          <ArrowLeftIcon className="h-5 w-5 [&_.arrow-path]:fill-gray-200 group-hover:[&_.arrow-path]:fill-gray-400 group-active:[&_.arrow-path]:fill-gray-400" />
        </button>

        <button
          className={`swiper-button-next group absolute right-[-40px] top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-grey-50 transition-colors hover:text-grey-100 active:text-grey-200 ${
            isEnd ? 'pointer-events-none opacity-0' : ''
          }`}
        >
          <ArrowRight className="h-5 w-5 [&_.arrow-path]:fill-gray-200 group-hover:[&_.arrow-path]:fill-gray-400 group-active:[&_.arrow-path]:fill-gray-400" />
        </button>
      </div>
    </section>
  )
}

export default RecommendedSection
