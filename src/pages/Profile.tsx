import defaultProfileAvatar from '../assets/images/defaultProfileAvatar.svg'
import { QueryClient, useQueryClient, useQuery } from '@tanstack/react-query'

import useBackendRequest from '../hooks/useBackendRequest'
import { HttpMethod, User } from '../types/types'
import EditProfileForm from '../components/EditProfileForm/EditProfileForm'
import Login from './Login'

// type Params = {
//   path: string
//   method?: HttpMethod
// }

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
        <div className="mx-auto mt-[6.4%] w-[77.63%] overflow-hidden font-[montserrat]">
          <div className="flex w-[82.26%] justify-between">
            <h1 className="pb-[3.58%] text-3xl font-medium">Мій профіль</h1>
            <section>
              <div className="pb-[2.39%] text-2xl font-normal">Інформація</div>
              <div className="text-base font-normal">Номер телефону: {userData?.phone_number}</div>
            </section>
            <EditProfileForm />
          </div>
          <section className="flex items-center">
            <img src={defaultProfileAvatar} alt="" />
            <div className="pl-[2.5%] text-3xl font-normal">{userData?.first_name}</div>
          </section>
          <section className="pt-[2.78%]">
            <div className="p-[0.79%] text-3xl font-medium">Мої оголошення</div>
            <div className="p-[0.79%] text-2xl">Актуальні</div>
          </section>
        </div>
      )}
      {isError && (
        <div>
          <Login />
        </div>
      )}
    </>
  )
}

export default Profile
