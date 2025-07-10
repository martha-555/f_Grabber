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
              <button className="mr-[120px] h-[48px] w-[48px] rounded-full bg-grey-50 hover:bg-grey-100 active:bg-grey-200">
                <EditPencil className="active:text-secondary-blue-800 m-auto text-secondary-blue-200 hover:text-secondary-blue-400" />
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
                  <DefaultAvatar className="text-primary-900" />
                </div>
              )}
            </div>
            <div className="mr-[120px]">
              <UserInfoItem
                text="Ім'я та прізвище"
                data={`${userInfo.first_name} ${userInfo.last_name}`}
              />
              <UserInfoItem text="E-mail" data={userInfo.email} />
              <UserInfoItem
                text="Про себе"
                data="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, beatae accusamus rerum assumenda corporis voluptatem tempora pariatur. Nihil nobis obcaecati odit quidem mollitia, ratione error sunt debitis, blanditiis optio delectus."
              />
              {userInfo.location && (
                <UserInfoItem
                  text="Місце виготовлення виробу/надання послуги"
                  data={userInfo.location}
                />
              )}
              <UserInfoItem
                text=" Соціальні мережі:"
                icon=<a target="_blank" rel="noopener noreferrer" href={`https://instagram.com/`}>
                  <InstIcon />
                </a>
              />
            </div>
          </div>
          {/* <div className="m-auto flex max-w-[94%] justify-between">
            <Link to={PATHS.PROFILE.changePassword}>
              <Button className="custom-button">Редагувати пароль</Button>
            </Link>
          </div> */}
        </div>
      )}
    </>
  )
}

export default Profile
