import searchIcon from '../../assets/images/searchIcon.svg'
import { Link, Outlet } from 'react-router-dom'
import { PATHS } from '../../paths.ts'
import { Menu } from '../../components'
import userProfileStore from '../../store/userProfileStore'
import { Button } from '../../components'

const PageWrapper = () => {
  const user = userProfileStore()

  return (
    <>
      <header className="w-full bg-[#2D336B] px-[6.12rem] py-[2.06rem] text-[#FFFFFF]">
        <div className="mx-auto flex w-full max-w-[1221px] items-center gap-[5.486%]">
          <h1 className="whitespace-nowrap text-b3 font-medium">
            <Link to={PATHS.HOME}>Grabber</Link>
          </h1>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Пошук товарів"
              className="h-[40px] w-full rounded-[20px] border-0.5 border-[#FFFFFF] bg-[#2D336B] pl-10 pr-4 text-b4 font-normal placeholder:text-b4 placeholder:font-normal"
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
          {user.isLoggedIn ? (
            <Menu />
          ) : (
            <Link to={PATHS.AUTH.login}>
              <Button
                text="Вхід"
                className="rounded-[20px] border border-white px-6 py-[0.5rem] text-[16px] text-white transition hover:bg-white hover:text-[#2D336B]"
              ></Button>
            </Link>
          )}
        </div>
      </header>
      <section className="content grow-1 w-full items-center">
        <Outlet />
      </section>
    </>
  )
}

export default PageWrapper
