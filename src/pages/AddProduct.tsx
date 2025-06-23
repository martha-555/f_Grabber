import { useForm } from 'react-hook-form'
import { addAdsSchema } from '../features/userValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import { AdsImageUploader } from '../components'
import { z } from 'zod'
import useAdsCreate from '../api/adsCreate'
import toast, { Toaster } from 'react-hot-toast'

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
    reset,
    formState: { errors },
  } = useForm<TFormData>({
    defaultValues,
    resolver: zodResolver(addAdsSchema),
  })

  const { mutateAsync: createAds } = useAdsCreate()

  const handleSubmitForm = async (data: TFormData) => {
    const newAds = {
      title: data.title,
      description: data.description,
      price: data.price,
      status: 'draft' as const,
      // category: data.category,
    }

    try {
      await createAds(newAds)
      toast.success('Оголошення відправлено на модерацію', { id: 'add_ads', duration: 2000 })
      reset()
    } catch (error) {
      toast.error(`Невідома помилка ${error}`, { id: 'add_ads', duration: 2000 })
    }
  }

  const watchCategory = watch('category')
  const watchTitle = watch('title')

  return (
    <div className="mx-auto max-w-7xl px-4 pt-24">
      <h1 className="mb-12 text-h3 text-grey-950">Створити оголошення</h1>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        {/* Секція для заголовка оголошення */}
        <section className="mb-10">
          <h2 className="mb-6 text-s1 text-grey-950">Заголовок оголошення *</h2>
          <p className="text-grey-800 mb-2 text-b3">Введіть коротку назву товару</p>
          <input
            {...register('title')}
            type="text"
            maxLength={100}
            placeholder="Приклад: Мед"
            className={`mb-2 w-full rounded-full bg-transparent px-4 py-2 outline outline-1 outline-grey-500 placeholder:text-grey-400 focus:outline-1 ${errors.title || watchTitle.length >= 101 ? 'outline-1 outline-error-default' : ''}`}
          />
          <div className="flex justify-between">
            <p className="text-d1 text-grey-400">Мінімум 3 символи</p>
            <p
              className={`text-d1 ${watchTitle.length >= 101 ? 'text-error-default' : 'text-grey-400'}`}
            >
              {watchTitle.length}/100
            </p>
          </div>
          {(errors.title || watchTitle.length >= 101) && (
            <p className="error-text">{errors.title?.message}</p>
          )}
        </section>

        {/* Секція для опису товару */}
        <section className="mb-10">
          <h2 className="mb-8 text-h4 font-medium">Опис</h2>
          <p className="font-regular mb-5 text-b4">
            Детально опишіть товар, стан, особливості тощо
          </p>
          <textarea
            {...register('description')}
            rows={3}
            placeholder="Приклад: Б/у, ідеальний стан, користувався обережно. Повна комплектація."
            className={`w-full rounded-3xl bg-[#D9D9D9] px-5 py-2 outline-none placeholder:text-[#4D4D4D] ${errors.description ? 'outline-1 outline-error-default' : ''}`}
          ></textarea>
          {errors.description && <p className="error-text">{errors.description.message}</p>}
        </section>

        {/* Секція для вибору категорії */}
        <section className="mb-10">
          <h2 className="mb-8 text-h4 font-medium">Категорія</h2>

          <div className="flex flex-wrap gap-5">
            {Object.entries(categories).map(([key, value]) => {
              return (
                <label
                  className={`text-regular transition-[background-color, color] cursor-pointer rounded-full border border-primary-900 px-4 py-2 text-b4 duration-300 ${
                    watchCategory === key
                      ? 'bg-primary-900 text-primary-30'
                      : 'text-primary-900 hover:bg-primary-900 hover:text-primary-30'
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
          <h2 className="mb-8 text-h4 font-medium">Додайте зображення</h2>
          <p className="font-regular mb-5 text-b4">
            Перетягніть файли або натисніть для завантаження
          </p>

          <AdsImageUploader setValue={setValue} watch={watch} />
        </section>

        {/* Секція для введення ціни */}
        <section className="mb-10">
          <h2 className="mb-8 text-h4 font-medium">Ціна</h2>
          <p className="font-regular mb-5 text-b4">Введіть ціну без ком/крапок</p>
          <input
            type="number"
            {...register('price')}
            placeholder="Наприклад: 12000"
            className={`w-full rounded-3xl bg-[#D9D9D9] px-5 py-2 outline-none placeholder:text-[#4D4D4D] ${
              errors.price ? 'outline-1 outline-error-default' : ''
            }`}
          />
          {errors.price && <p className="error-text">{errors.price.message}</p>}
        </section>

        <button type="submit" className="button px-16 py-2">
          Опублікувати
        </button>
      </form>

      <Toaster
        position="bottom-center"
        toastOptions={{
          id: 'profile-editor-toasts',
          className:
            '!bg-[#FFFFFF] !text-[1.5rem]  text-[#000000] rounded-[100px] flex flex-row-reverse !max-w-none !w-fit !whitespace-nowrap px-[1.25rem] py-[0.625rem]',
        }}
      />
    </div>
  )
}

export default AddProduct
