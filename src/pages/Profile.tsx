import defaultProfileAvatar from '../assets/images/defaultProfileAvatar.svg'
import editIcon from '../assets/images/editIcon.png'
import { formatDate } from '../features/formatDate'
import { Link } from 'react-router-dom'
import { PATHS } from '../paths'
import ProfileField from '../components/ProfileField/ProfileField'
import userProfileStore from '../store/userProfileStore'
import deleteIcon from '../assets/images/deleteIcon.svg'

const Profile = () => {
  const userData = userProfileStore((state) => state)
  const userInfo = userData.userInfo

  return (
    <>
      {!userData.isLoading && (
        <div className="mx-auto mt-[6.43rem] max-w-[80%] p-[3px]">
          <h1 className="mb-[5.93rem] p-[0.625rem] text-px32 font-medium">Мій профіль</h1>
          <div className="flex justify-center gap-[3.06rem]">
            <div className="flex max-w-[46%] gap-5 rounded-[25px] py-[4.37rem] pl-[1.94rem] pr-[1.94rem] shadow-blur">
              <img
                className="relative h-[173px] w-[173px] rounded-[20px] object-cover object-[50%_20%]"
                src={userInfo.user_photo ? (userInfo.user_photo as string) : defaultProfileAvatar}
                alt=""
              />
              <img className="absolute" src={deleteIcon} />
              <div className="column flex flex-col">
                <p className="p-[0.625rem] pr-0 text-px24">{`${userInfo.first_name} ${userInfo.last_name}`}</p>
                <p className="p-[0.625rem] pr-0 text-px16">Місцезнаходження: {userInfo.location}</p>
                <p className="p-[0.625rem] pr-0 text-px16">
                  Номер телефону: {userInfo.phone_number}
                </p>
                {userInfo?.date_joined && (
                  <p className="p-[0.625rem] text-px16">
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
                <div className="pr-[1.37rem] text-px16">
                  <ProfileField text="Ім’я" data={userInfo.first_name} />
                  <ProfileField text="Прізвище" data={userInfo.last_name} />
                  <ProfileField text="Email" data={userInfo.email} />
                  <ProfileField text="Номер телефону" data={userInfo.phone_number} />
                </div>
              </div>
            </div>
          </div>
          <div className="m-auto flex max-w-[80%] justify-between">
            <Link to={PATHS.PROFILE.edit}>
              <button className="my-[6.75rem] rounded-[20px] bg-[#2D336B] px-[2.72rem] py-[0.625rem] text-px16 text-[#F8F8F8]">
                Редагувати профіль
              </button>
            </Link>
            <Link to={PATHS.PROFILE.changePassword}>
              <button className="my-[6.75rem] rounded-[20px] bg-[#2D336B] px-[2.72rem] py-[0.625rem] text-px16 text-[#F8F8F8]">
                Редагувати пароль
              </button>
            </Link>
          </div>
          <section className="pt-[2.78%]">
            <div className="mb-[4.25rem] p-[0.625rem] text-px32 font-medium">Мої оголошення</div>
          </section>
        </div>
      )}
    </>
  )
}

export default Profile
