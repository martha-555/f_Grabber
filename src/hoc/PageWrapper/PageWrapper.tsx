import defaultAvatar from '../../assets/images/defaultAvatar.svg'
import searchIcon from '../../assets/images/searchIcon.svg'
import { Link, Outlet } from 'react-router-dom'
import LogOutButton from '../../components/LogOutButton/LogOutButton'
import userProfileStore from '../../store/userProfileStore'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import { PATHS } from '../../paths'

const PageWrapper = () => {
  const user = userProfileStore((state) => state.userInfo)

  return (
    <>
      <header className="w-full bg-[#2D336B] px-[6.12rem] py-[2.06rem] text-[#FFFFFF]">
        <div className="mx-auto flex w-full max-w-[1221px] items-center gap-[5.486%]">
          <h1 className="whitespace-nowrap text-px20 font-medium">
            <Link to={PATHS.HOME}>Grabber</Link>
          </h1>

          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Пошук товарів"
              className="h-[40px] w-full rounded-[20px] border-0.5 border-[#FFFFFF] bg-[#2D336B] pl-10 pr-4 text-px16 font-normal placeholder:text-px16 placeholder:font-normal"
            />
            <img
              src={searchIcon}
              alt="search icon"
              className="absolute left-4 top-1/2 block h-5 w-5 -translate-y-1/2 transform"
            />
          </div>
          <Link to={PATHS.PRODUCTS.add} className="button bg-white text-[#000000]">
            Створити оголошення
          </Link>
          <PrivateRoute>
            <Link to={PATHS.PROFILE.profile}>
              <img
                src={(user.user_photo as string) || defaultAvatar}
                alt="avatar"
                className="block h-10 w-10 rounded-full"
              />
            </Link>
          </PrivateRoute>
          <LogOutButton />
        </div>
      </header>
      <section className="content grow-1 w-full items-center">
        <Outlet />
      </section>
    </>
  )
}

export default PageWrapper
