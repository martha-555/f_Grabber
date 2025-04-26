import { useEffect } from 'react'
import defaultProfileAvatar from '../assets/images/defaultProfileAvatar.svg'
import { useQuery } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { HttpMethod, User } from '../types/types'
import EditProfileForm from '../components/EditProfileForm'

type Params = {
  path: string
  method?: HttpMethod
}

const Profile = () => {
  const fetchUserProfile = useBackendRequest()
  const backendURL = import.meta.env.VITE_API_URL

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['profile'],
    queryFn: () => fetchUserProfile<User>({ path: '/api/profile/', method: 'GET' }),
  })
  console.log(userData)
  console.log({ isLoading })

  /*--- ФУНКЦІЯ ДЛЯ ВХОДУ */
  const request = async <T,>({ path, method = 'GET' }: Params): Promise<T> => {
    const response = await fetch(`${backendURL}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        email: 'martagolov4ak@gmail.com',
        password: 'Marta123',
      }),
    })
    const data = await response.json()
    console.log({ data })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return data
  }

  // console.log({ data })
  // if (isLoading) return <div>Loading...</div>
  // if (isError) return <div>Error fetching profile</div>

  return (
    <>
      {!isLoading && userData && (
        <div className="w-[77.63%] mx-auto font-[montserrat] overflow-hidden mt-[6.4%]">
          <div className="flex w-[82.26%] justify-between">
            <h1 className="text-3xl font-medium pb-[3.58%]">Мій профіль</h1>
            <section>
              <div className="pb-[2.39%] text-2xl font-normal">Інформація</div>
              <div className="font-normal text-base">Номер телефону: {userData?.phone_number}</div>
            </section>
            <EditProfileForm />
          </div>
          <section className="flex items-center">
            <img src={defaultProfileAvatar} alt="" />
            <div className="pl-[2.5%] font-normal text-3xl">{userData?.first_name}</div>
          </section>
          <section className="pt-[2.78%]">
            <div className="p-[0.79%] text-3xl font-medium">Мої оголошення</div>
            <div className="p-[0.79%] text-2xl">Актуальні</div>
          </section>
        </div>
      )}
      {isError && (
        <div>
          <p>Увійдіть або зареєструйтесь</p>
          <button
            className="border p-[10] rounded-xl bg-gray-300"
            onClick={() => request({ path: '/api/login/', method: 'POST' })}
          >
            login
          </button>
        </div>
      )}
    </>
  )
}

export default Profile
