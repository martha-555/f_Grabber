import { Link } from 'react-router-dom'
import { TAd } from '../../types/productTypes'
import ArrowIcon from '../../assets/icons/arrow-icon.svg?react'
import LocationIcon from '../../assets/icons/location-icon.svg?react'
import defaultAvatar from '../../assets/images/defaultAvatar.svg'

type Props = {
  ad: TAd
  className?: string
}

const RecommendedCard = ({ ad, className }: Props) => {
  return (
    <section className={className}>
      <div
        tabIndex={0}
        className="card-recommended mx-auto flex h-[491px] flex-col rounded-[20px] p-6 shadow-transp-50"
      >
        <img
          src={ad.images[0] || defaultAvatar}
          alt={ad.title}
          className="h-[250px] w-full rounded-[15px] object-cover"
        />

        <div className="flex items-center justify-between pt-8">
          <h3 className="text-s1 text-grey-950">{ad.title}</h3>
          <Link to="#">
            <ArrowIcon aria-label="Arrow icon" className="text-grey-950" />
          </Link>
        </div>

        <p className="mt-3 truncate text-b4 text-grey-500">{ad.description}</p>
        <p className="mt-3 text-b3 text-grey-950">{ad.price} грн</p>

        <div className="mt-6 flex items-center gap-4 pb-2">
          <LocationIcon aria-label="Location" className="text-primary-900" />
          <p className="text-b4 text-grey-500">{ad.location}</p>
        </div>
      </div>
    </section>
  )
}

export default RecommendedCard
