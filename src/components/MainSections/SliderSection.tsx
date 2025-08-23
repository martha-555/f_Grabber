import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import sliderImg from '../../assets/images/frame334.jpg'
import ArrowLeft from '../../assets/icons/arrow-left.svg?react'
import ArrowRight from '../../assets/icons/arrow-right.svg?react'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SliderBlock from './SliderBlock'

const SliderSection = () => {
  return (
    <div className="relative my-[96px]">
      <button className="sliderButton prevBtn group absolute left-[110px] top-[190px]">
        <ArrowLeft className="arrowIcon" />
      </button>
      <button className="sliderButton nextBtn group absolute right-[110px] top-[190px]">
        <ArrowRight className="arrowIcon" />
      </button>
      <Swiper
        className="max-h-[450px] max-w-[1202px]"
        modules={[Pagination, Navigation]}
        navigation={{ nextEl: '.nextBtn', prevEl: '.prevBtn' }}
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        <SwiperSlide className="m-auto">
          <SliderBlock
            primaryText={
              <>
                Вироби ручної роботи <br /> напряму від майстрів
              </>
            }
            secondaryText="Підтримайте місцевих кравців та кравчинь"
            sliderImg={sliderImg}
            buttonText="Ознайомитися"
            path="#"
          />
        </SwiperSlide>
        <SwiperSlide className="m-auto">
          <SliderBlock
            primaryText={
              <>
                Вироби ручної роботи <br /> напряму від майстрів
              </>
            }
            secondaryText="Підтримайте місцевих кравців та кравчинь"
            sliderImg={sliderImg}
            buttonText="Ознайомитися"
            path="#"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SliderSection
