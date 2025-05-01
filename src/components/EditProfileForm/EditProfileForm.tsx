import { useState } from 'react'
import { useForm } from 'react-hook-form'

const EditProfileForm = () => {
  const [isOpen, setIsOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  const handleClick = () => {
    setIsOpen(true)
  }

  return (
    <>
      <div className="max-h-[100vh]">
        <button onClick={handleClick} className="rounded-xl border bg-gray-300 p-[10]">
          Редагувати профіль
        </button>
        {isOpen && (
          <form
            className="fixed absolute right-[24%] top-[25%] flex h-[50%] w-[50%] flex-col gap-10 border bg-gray-200 p-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="border"
              defaultValue="nnnnnn"
              {...register('firstName', { required: true })}
              placeholder="First Name"
            />
            {errors.firstName && <span>First Name is required</span>}

            <input
              className="border"
              {...register('email', { required: true })}
              placeholder="Email"
            />
            {errors.email && <span>Email is required</span>}
            <div>
              <button className="mr-10 rounded-xl border bg-gray-300 p-[10]" type="submit">
                Зберегти
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-xl border bg-gray-300 p-[10]"
              >
                Скасувати
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  )
}

export default EditProfileForm
