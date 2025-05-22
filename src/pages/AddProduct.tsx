import { useForm } from 'react-hook-form'
import { addAdsSchema } from '../features/userValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import { AdsImageUploader } from '../components'
import { z } from 'zod'
import adsCreate from '../api/adsCreate'

export type TFormData = z.infer<typeof addAdsSchema>

const defaultValues: TFormData = {
  title: '',
  description: '',
  category: '',
  images: [],
  price: '0',
}

const categories = {
  electronics: 'Електроніка',
  clothing: 'Одяг',
  transport: 'Транспорт',
  'real-estate': 'Нерухомість',
  children: 'Дитяче',
  other: 'Інше',
}

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<TFormData>({
    defaultValues,
    resolver: zodResolver(addAdsSchema),
  })

  const { mutateAsync: createAds } = adsCreate()

  const handleSubmitForm = async (data: TFormData) => {
    const newAds = {
      title: data.title,
      description: data.description,
      price: data.price,
      status: 'pending' as const,
      // category: data.category,
    }

    createAds(newAds)
  }

  const watchCategory = watch('category')

  return (
    <div className="mx-auto max-w-7xl px-4 pt-24">
      <h1 className="text-px32 mb-24 font-medium">Створити оголошення</h1>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        {/* Секція для заголовка оголошення */}
        <section className="mb-10">
          <h2 className="text-px24 mb-8 font-medium">Заголовок оголошення</h2>
          <p className="font-regular text-px16 mb-5">
            Введіть коротку назву товару (до 100 символів)
          </p>
          <input
            {...register('title')}
            type="text"
            placeholder="Приклад: iPhone 12, 128 Gb"
            className={`w-full rounded-full bg-[#D9D9D9] px-5 py-2 outline-none placeholder:text-[#4D4D4D] ${errors.title ? 'outline-1 outline-error' : ''}`}
          />
          {errors.title && <p className="error-text">{errors.title.message}</p>}
        </section>

        {/* Секція для опису товару */}
        <section className="mb-10">
          <h2 className="text-px24 mb-8 font-medium">Опис</h2>
          <p className="font-regular text-px16 mb-5">
            Детально опишіть товар, стан, особливості тощо
          </p>
          <textarea
            {...register('description')}
            rows={3}
            placeholder="Приклад: Б/у, ідеальний стан, користувався обережно. Повна комплектація."
            className={`w-full rounded-3xl bg-[#D9D9D9] px-5 py-2 outline-none placeholder:text-[#4D4D4D] ${errors.description ? 'outline-1 outline-error' : ''}`}
          ></textarea>
          {errors.description && <p className="error-text">{errors.description.message}</p>}
        </section>

        {/* Секція для вибору категорії */}
        <section className="mb-10">
          <h2 className="text-px24 mb-8 font-medium">Категорія</h2>

          <div className="flex flex-wrap gap-5">
            {Object.entries(categories).map(([key, value]) => {
              return (
                <label
                  className={`text-regular transition-[background-color, color] text-px16 cursor-pointer rounded-full border border-[#2D336B] px-4 py-2 duration-300 ${
                    watchCategory === key
                      ? 'bg-[#2D336B] text-white'
                      : 'text-[#2D336B] hover:bg-[#2D336B] hover:text-white'
                  }`}
                  key={key + value}
                >
                  {value}
                  <input
                    type="radio"
                    {...register('category')}
                    value={key}
                    id={key}
                    className="appearance-none"
                  />
                </label>
              )
            })}
          </div>
        </section>

        {/* Секція для завантаження зображень */}
        <section className="mb-10">
          <h2 className="text-px24 mb-8 font-medium">Додайте зображення</h2>
          <p className="font-regular text-px16 mb-5">
            Перетягніть файли або натисніть для завантаження
          </p>

          <AdsImageUploader setValue={setValue} watch={watch} />
        </section>

        {/* Секція для введення ціни */}
        <section className="mb-10">
          <h2 className="text-px24 mb-8 font-medium">Ціна</h2>
          <p className="font-regular text-px16 mb-5">Введіть ціну без ком/крапок</p>
          <input
            type="number"
            {...register('price')}
            placeholder="Наприклад: 12000"
            className={`w-full rounded-3xl bg-[#D9D9D9] px-5 py-2 outline-none placeholder:text-[#4D4D4D] ${
              errors.price ? 'outline-1 outline-error' : ''
            }`}
          />
          {errors.price && <p className="error-text">{errors.price.message}</p>}
        </section>

        <button type="submit" className="button px-16 py-2">
          Опублікувати
        </button>
      </form>
    </div>
  )
}

export default AddProduct
