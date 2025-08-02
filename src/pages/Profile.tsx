import EditPencil from '../assets/images/editPencil.svg?react'
import DefaultAvatar from '../assets/images/defaultAvatar.svg?react'
import { Link } from 'react-router-dom'
import { PATHS } from '../paths'
import userProfileStore from '../store/userProfileStore'
import { UserInfoItem } from '../components'
import InstIcon from '../assets/images/instagramIcon.svg?react'

const Profile = () => {
  const userData = userProfileStore((state) => state)
  const userInfo = userData.userInfo

  return (
    <>
      {!userData.isLoading && (
        <div className="text-b-2 mx-auto mb-40 text-grey-800">
          <div className="mt-24 flex justify-between">
            <h1 className="tex-grey-950 mb-12 ml-[8.33%] text-h3 font-medium">Мій профіль</h1>
            <Link to={PATHS.PROFILE.edit}>
              <button className="editButton mr-[120px]">
                <EditPencil className="editIcon" />
              </button>
            </Link>
          </div>
          <div className="ml-[15.42%] flex max-w-[76.25%] gap-[32px]">
            <div className="h-[285px] w-[285px] flex-shrink-0">
              {userInfo.user_photo ? (
                <img
                  className="h-full w-full rounded-[25px] object-cover object-[50%_20%]"
                  src={userInfo.user_photo as string}
                />
              ) : (
                <div className="flex h-full items-center justify-center rounded-[20px] bg-grey-100">
                  <DefaultAvatar className="text-primary-950" />
                </div>
              )}
            </div>
            <div className="mr-[120px]">
              <UserInfoItem
                text="Ім'я та прізвище"
                data={`${userInfo.first_name} ${userInfo.last_name}`}
              />
              <UserInfoItem text="E-mail" data={userInfo.email} />
              <UserInfoItem text="Телефон" data={userInfo.phone_number} />
              <UserInfoItem text="Про себе" data={userInfo.description} />
              {userInfo.location && (
                <UserInfoItem
                  text="Місце виготовлення виробу/надання послуги"
                  data={userInfo.location}
                />
              )}
              <UserInfoItem
                text=" Соціальні мережі:"
                data={userInfo?.social_links?.[0].url}
                icon=<a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={userInfo?.social_links?.[0].url}
                >
                  <InstIcon />
                </a>
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Profile
