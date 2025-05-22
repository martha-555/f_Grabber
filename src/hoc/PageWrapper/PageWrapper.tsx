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
          <h1 className="text-px20 whitespace-nowrap font-medium">
            <Link to="/">Grabber</Link>
          </h1>

          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Пошук товарів"
              className="text-px16 placeholder:text-px16 h-[40px] w-full rounded-[20px] border-0.5 border-[#FFFFFF] bg-[#2D336B] pl-10 pr-4 font-normal placeholder:font-normal"
            />
            <img
              src={searchIcon}
              alt="search icon"
              className="absolute left-4 top-1/2 block h-5 w-5 -translate-y-1/2 transform"
            />
          </div>
          <button className="h-[40px] whitespace-nowrap rounded-[20px] bg-white px-6 text-[16px] text-[#000000]">
            Створити оголошення
          </button>
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
