import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import sliderImg from '../../assets/images/frame334.jpg'
import ArrowLeft from '../../assets/icons/arrow-left.svg?react'
import ArrowRight from '../../assets/icons/arrow-right.svg?react'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'

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
          <div
            className="flex h-[400px] items-end justify-around rounded-[20px] bg-cover bg-center pb-[48px]"
            style={{ backgroundImage: `url(${sliderImg})` }}
          >
            <div className="text-primary-50">
              <p className="mb-4 text-h31">
                Вироби ручної роботи <br /> напряму від майстрів
              </p>
              <p className="text-b3">Підтримайте місцевих кравців та кравчинь</p>
            </div>
            <div>
              <Link to="#">
                <button className="!light-button">Ознайомитися</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="m-auto">
          <div
            className="h-[400px] w-full rounded-xl bg-cover bg-center"
            style={{ backgroundImage: `url(${sliderImg})` }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SliderSection
