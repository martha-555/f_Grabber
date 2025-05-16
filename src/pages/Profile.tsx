import defaultProfileAvatar from '../assets/images/defaultProfileAvatar.svg'
import editIcon from '../assets/images/editIcon.png'
import { formatDate } from '../features/formatDate'
import { Link } from 'react-router-dom'
import { PATHS } from '../paths'
import ProfileField from '../components/ProfileField/ProfileField'
import userProfileStore from '../store/userProfileStore'

const Profile = () => {
  const userData = userProfileStore((state) => state)
  const userInfo = userData.userInfo

  return (
    <>
      {!userData.isLoading && (
        <div className="mx-auto mt-[6.43rem] max-w-[80%] p-[3px]">
          <h1 className="text-px32 mb-[5.93rem] p-[0.625rem] font-medium">Мій профіль</h1>
          <div className="flex justify-center gap-[3.06rem]">
            <div className="flex max-w-[46%] gap-5 rounded-[25px] py-[4.37rem] pl-[1.94rem] pr-[1.94rem] shadow-blur">
              {userInfo.user_photo ? (
                <img
                  className="h-[173px] w-[173px] rounded-[20px] object-cover object-[50%_20%]"
                  src={userInfo.user_photo as string}
                  alt=""
                />
              ) : (
                <div className="flex h-[173px] w-[173px] items-center justify-center rounded-[20px] bg-[#F7F7F7]">
                  <img className="h-[92.11px] w-[78.8px]" src={defaultProfileAvatar} alt="" />
                </div>
              )}
              <div className="column flex flex-col">
                <p className="text-px24 p-[0.625rem] pr-0">{`${userInfo.first_name} ${userInfo.last_name}`}</p>
                <p className="text-px16 p-[0.625rem] pr-0">Місцезнаходження: {userInfo.location}</p>
                <p className="text-px16 p-[0.625rem] pr-0">
                  Номер телефону: {userInfo.phone_number}
                </p>
                {userInfo?.date_joined && (
                  <p className="text-px16 p-[0.625rem]">
                    Дата реєстрації: {formatDate(userInfo.date_joined)}
                  </p>
                )}
              </div>
            </div>
            <div className="max-w-[46%] rounded-[25px] px-[1.25rem] pt-[1.87rem] shadow-blur">
              <div className="pl-[1.25rem]">
                <div className="flex items-center gap-[6.06rem] py-[1.15rem] pl-[0.625rem] pr-[1.37rem]">
                  <p className="text-px24 font-medium">Персональна інформація</p>
                  <Link to={PATHS.PROFILE.edit}>
                    <img src={editIcon} alt="" />
                  </Link>
                </div>
                <div className="text-px16 pr-[1.37rem]">
                  <ProfileField text="Ім’я" data={userInfo.first_name} />
                  <ProfileField text="Прізвище" data={userInfo.last_name} />
                  <ProfileField text="Email" data={userInfo.email} />
                  <ProfileField text="Номер телефону" data={userInfo.phone_number} />
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
    </>
  )
}

export default Profile
