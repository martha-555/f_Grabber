import React from 'react'
import { StarRating } from '../'
import { useLocation } from 'react-router-dom'
import useFetchRating from '../../api/useFetchRating'

interface CommentsProps {}

const Comments: React.FC<CommentsProps> = ({}) => {
  const { pathname } = useLocation()

  const id = pathname.split('/products/')[1]?.split('/')[0]

  const { data } = useFetchRating(id)

  return (
    <section className="mb-16 flex flex-col items-center justify-center">
      <h3 className="mb-16 text-h3">Відгуки покупців</h3>
      <section className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-6">
          <p className="text-h3">{data ? data.average_rating : 'Завантаження рейтингу...'}/5.0</p>
          <StarRating rating={data ? data.average_rating : 0} />
        </div>
        <p className="text-d1 text-grey-600">
          на базі {data ? data.reviews.length : 'Завантаження відгуків...'} відгуків
        </p>
      </section>
    </section>
  )
}

export default Comments
