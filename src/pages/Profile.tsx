import defaultProfileAvatar from '../assets/images/defaultProfileAvatar.svg'
import { QueryClient, useQueryClient, useQuery } from '@tanstack/react-query'

import useBackendRequest from '../hooks/useBackendRequest'
import { HttpMethod, User } from '../types/types'
import EditProfileForm from '../components/EditProfileForm/EditProfileForm'
import Login from './Login'

type Params = {
  path: string
  method?: HttpMethod
}

const Profile = () => {
  const fetchUserProfile = useBackendRequest()

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['profile'],
    queryFn: () => fetchUserProfile<User>({ path: '/api/profile/', method: 'GET' }),
    retry: 1, // Зменшіть кількість спроб
    retryDelay: 1000, // Затримка між спробами
  })

  console.log({ userData })
  console.log({ isLoading })

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
          {/* <button onClick={() => request({ path: '/api/register/', method: 'POST' })}>
            register
          </button> */}
          <Login />
        </div>
      )}
    </>
  )
}

export default Profile
