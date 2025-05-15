import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { addAdsSchema } from '../features/userValidation'
import { zodResolver } from '@hookform/resolvers/zod'

type TFormData = z.infer<typeof addAdsSchema>

const defaultValues: TFormData = {
  title: '',
  description: '',
  category: '',
  images: [],
  price: 0,
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
    formState: { errors },
  } = useForm<TFormData>({
    defaultValues,
    resolver: zodResolver(addAdsSchema),
  })

  const handleSubmitForm = (data: TFormData) => {
    console.log(data)
  }

  const watchCategory = watch('category')

  return (
    <div className="mx-auto max-w-7xl px-4 pt-24">
      <h1 className="mb-24 text-px32 font-medium">Створити оголошення</h1>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        {/* Секція для заголовка оголошення */}
        <section className="mb-10">
          <h2 className="mb-8 text-px24 font-medium">Заголовок оголошення</h2>
          <p className="font-regular mb-5 text-px16">
            Введіть коротку назву товару (до 100 символів)
          </p>
          <input
            {...register('title')}
            type="text"
            placeholder="Приклад: iPhone 12, 128 Gb"
            className={`w-full rounded-full bg-[#D9D9D9] px-5 py-2 outline-none placeholder:text-[#4D4D4D] ${
              errors.title ? 'outline-1 outline-error' : ''
            }`}
          />
          {errors.title && <p className="error-text">{errors.title.message}</p>}
        </section>

        {/* Секція для опису товару */}
        <section className="mb-10">
          <h2 className="mb-8 text-px24 font-medium">Опис</h2>
          <p className="font-regular mb-5 text-px16">
            Детально опишіть товар, стан, особливості тощо
          </p>
          <textarea
            {...register('description')}
            rows={3}
            placeholder="Приклад: Б/у, ідеальний стан, користувався обережно. Повна комплектація."
            className={`w-full rounded-3xl bg-[#D9D9D9] px-5 py-2 outline-none placeholder:text-[#4D4D4D] ${
              errors.title ? 'outline-1 outline-error' : ''
            }`}
          ></textarea>
        </section>

        {/* Секція для вибору категорії */}
        <section className="mb-10">
          <h2 className="mb-8 text-px24 font-medium">Категорія</h2>

          <div className="flex flex-wrap gap-5">
            {Object.entries(categories).map(([key, value]) => {
              return (
                <label
                  className={`text-regular transition-[background-color, color] cursor-pointer rounded-full border border-[#2D336B] px-4 py-2 text-px16 duration-300 ${
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
          <h2 className="mb-8 text-px24 font-medium">Додайте зображення</h2>
          <p className="font-regular mb-5 text-px16">
            Перетягніть файли або натисніть для завантаження
          </p>
          <input type="file" {...register('images')} multiple />
        </section>

        {/* Секція для введення ціни */}
        <section className="mb-10">
          <h2 className="mb-8 text-px24 font-medium">Ціна</h2>
          <p className="font-regular mb-5 text-px16">Введіть ціну без ком/крапок</p>
          <input
            type="number"
            {...register('price')}
            placeholder="Наприклад: 12000"
            className={`w-full rounded-3xl bg-[#D9D9D9] px-5 py-2 outline-none placeholder:text-[#4D4D4D] ${
              errors.title ? 'outline-1 outline-error' : ''
            }`}
          />
        </section>

        <button type="submit" className="button px-16 py-2">
          Опублікувати
        </button>
      </form>
    </div>
  )
}

export default AddProduct
