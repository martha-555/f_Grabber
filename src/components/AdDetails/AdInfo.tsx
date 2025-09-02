import { useState } from 'react'
import LocationIcon from '../../assets/icons/location-icon.svg?react'
import useAdDetails from '../../api/useAdDetails.ts'
import useCartStore from '../../store/cartStore.ts'
import { Button, ImageGallery, Counter } from '../../components'

type Props = {
  ad_id: string
}

const AdInfo = ({ ad_id }: Props) => {
  const { data, isLoading } = useAdDetails(ad_id)
  const [count, setCount] = useState(1)
  const addToCart = useCartStore((state) => state.addToCart)

  if (isLoading || !data || data.id === undefined) return null

  const handleAddToCart = () => {
    addToCart({
      id: String(data.id),
      title: data.title,
      price: data.price,
      quantity: count,
    })
    setCount(1)
  }

  return (
    <div className="m-auto mb-[160px] flex max-w-container flex-col gap-[46px] pt-8">
      <p className="text-b3 text-grey-400">
        Категорії <span className="text-grey-800">{data.category}</span>
      </p>

      <div className="flex gap-[100px]">
        <div className="w-1/2">
          <div className="flex min-h-[650px] flex-wrap gap-2">
            {data.images?.length > 0 && (
              <ImageGallery images={data.images} title={data.title} product_id={data.id} />
            )}
          </div>
        </div>

        <div className="flex w-1/2 flex-col">
          <h2 className="pb-8 font-kyiv text-h3 font-bold">{data.title}</h2>
          <p className="min-h-[250px] pb-8 text-b3 text-grey-800">{data.description}</p>

          <div className="pb-[61px]">
            <span className="pb-2 text-d1 text-grey-600">Місце виготовлення виробу</span>
            <div className="flex items-center gap-2">
              <LocationIcon className="text-primary-950" />
              <span className="text-primary-900 text-b2">{data.location}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 pb-8">
            <p className="text-b1">{data.price} грн.</p>
            <span className="text-d1 text-grey-600">
              Вартість доставки розраховується при оформленні замовлення
            </span>
          </div>

          <span className="pb-2 text-d1 text-grey-600">Кількість</span>
          <div className="flex gap-4">
            <Counter count={count} setCount={setCount} />
            <Button text="Додати в кошик" className="h-[40px] py-0" onClick={handleAddToCart} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdInfo
