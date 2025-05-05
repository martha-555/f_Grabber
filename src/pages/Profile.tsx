import defaultProfileAvatar from '../assets/images/defaultProfileAvatar.svg'
import { useQuery } from '@tanstack/react-query'
import useBackendRequest from '../hooks/useBackendRequest'
import { User } from '../types/types'
import editIcon from '../assets/images/editIcon.png'
import Login from './Login'
import { formatDate } from '../features/formatDate'
import { Link } from 'react-router-dom'
import { PATHS } from '../paths'
import ProfileField from '../components/ProfileField/ProfileField'

const Profile = () => {
  const fetchUserProfile = useBackendRequest()

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['profile'],
    queryFn: () => fetchUserProfile<User>({ path: '/api/profile/' }),
    retry: 1,
    retryDelay: 1000,
  })

  return (
    <>
      {!isLoading && userData && (
        <div className="mx-auto mt-[6.43rem] max-w-[80%] p-[3px]">
          <h1 className="text-px32 mb-[5.93rem] p-[0.625rem] font-medium">Мій профіль</h1>
          <div className="flex justify-center gap-[3.06rem]">
            <div className="flex max-w-[46%] gap-5 rounded-[25px] py-[4.37rem] pl-[1.94rem] pr-[1.94rem] shadow-blur">
              <img src={defaultProfileAvatar} alt="" />
              <div className="column flex flex-col">
                <p className="text-px24 p-[0.625rem] pr-0">{`${userData.first_name} ${userData.last_name}`}</p>
                <p className="text-px16 p-[0.625rem] pr-0">Місцезнаходження: {userData.location}</p>
                <p className="text-px16 p-[0.625rem] pr-0">
                  Номер телефону: {userData.phone_number}
                </p>
                {userData?.date_joined && (
                  <p className="text-px16 p-[0.625rem]">
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
                <div className="text-px16 pr-[1.37rem]">
                  <ProfileField text="Ім’я" data={userData.first_name} />
                  <ProfileField text="Прізвище" data={userData.last_name} />
                  <ProfileField text="Email" data={userData.email} />
                  <ProfileField text="Номер телефону" data={userData.phone_number} />
                </div>
              </div>
            </div>
          </div>
          <Link to={PATHS.PROFILE.edit}>
            <button className="text-px16 my-[6.75rem] rounded-[20px] bg-[#2D336B] px-[2.72rem] py-[0.625rem] text-[#F8F8F8]">
              Редагувати профіль
            </button>
          </Link>
          <section className="pt-[2.78%]">
            <div className="text-px32 mb-[4.25rem] p-[0.625rem] font-medium">Мої оголошення</div>
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
