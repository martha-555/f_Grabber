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
        <button onClick={handleClick} className="border p-[10] rounded-xl bg-gray-300 ">
          Редагувати профіль
        </button>
        {isOpen && (
          <form
            className="absolute border flex flex-col gap-10 p-5 w-[50%] h-[50%] top-[25%] right-[24%] bg-gray-200 fixed"
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
              <button className="border p-[10] rounded-xl bg-gray-300 mr-10" type="submit">
                Зберегти
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="border p-[10] rounded-xl bg-gray-300"
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
