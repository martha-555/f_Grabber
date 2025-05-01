import defaultProfileAvatar from '../assets/images/defaultProfileAvatar.svg'
import { useQuery } from '@tanstack/react-query'

import useBackendRequest from '../hooks/useBackendRequest'
import { User } from '../types/types'
import EditProfileForm from '../components/EditProfileForm/EditProfileForm'
import editIcon from '../assets/images/editIcon.png'
import Login from './Login'
import { formatDate } from '../features/formatDate'

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
        <div className="mx-auto mt-[6.43rem] max-w-[90%] overflow-hidden p-[3px]">
          <div>
            <h1 className="mb-[5.93rem] p-[0.625rem] text-px32 font-medium">Мій профіль</h1>
          </div>
          <div className="flex gap-[3.06rem]">
            <div className="flex max-w-[46%] gap-5 rounded-[25px] py-[4.37rem] pl-[1.94rem] pr-[1.94rem] shadow-blur">
              <img src={defaultProfileAvatar} alt="" />
              <div className="column flex flex-col">
                <p className="p-[0.625rem] pr-0 text-px24">{`${userData.first_name} ${userData.last_name}`}</p>
                <p className="p-[0.625rem] pr-0 text-px16">Місцезнаходження: {userData.location}</p>
                <p className="p-[0.625rem] pr-0 text-px16">
                  Номер телефону: {userData.phone_number}
                </p>
                {userData?.date_joined && (
                  <p className="p-[0.625rem] text-px16">
                    Дата реєстрації: {formatDate(userData.date_joined)}
                  </p>
                )}
              </div>
            </div>
            <div className="max-w-[46%] rounded-[25px] px-[1.25rem] pt-[1.87rem] shadow-blur">
              <div className="pl-[1.25rem]">
                <div className="flex items-center gap-[6.06rem] py-[1.15rem] pl-[0.625rem] pr-[1.37rem]">
                  <p className="text-px24 font-medium">Персональна інформація</p>
                  <img src={editIcon} alt="" />
                </div>
                <div className="pr-[1.37rem] text-px16">
                  <div className="flex justify-between p-[0.625rem]">
                    <p className="text-[#4D4D4D]">Ім’я</p>
                    <p>{userData.first_name}</p>
                  </div>
                  <div className="flex justify-between p-[0.625rem]">
                    <p className="text-[#4D4D4D]">Прізвище</p>
                    <p>{userData.last_name}</p>
                  </div>
                  <div className="flex justify-between p-[0.625rem]">
                    <p className="text-[#4D4D4D]">Email</p>
                    <p>{userData.email}</p>
                  </div>
                  <div className="flex justify-between p-[0.625rem]">
                    <p className="text-[#4D4D4D]">Номер телефону</p>
                    <p>{userData.phone_number}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="my-[6.75rem] rounded-[20px] bg-[#2D336B] px-[2.72rem] py-[0.625rem] text-px16 text-[#F8F8F8]">
            Редагувати профіль
          </button>
          <section className="pt-[2.78%]">
            <div className="mb-[4.25rem] p-[0.625rem] text-px32 font-medium">Мої оголошення</div>
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
