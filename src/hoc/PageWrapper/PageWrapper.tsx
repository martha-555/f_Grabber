import defaultAvatar from '../../assets/images/defaultAvatar.svg'
import searchIcon from '../../assets/images/searchIcon.svg'
import { Link, Outlet } from 'react-router-dom'
import { PATHS } from '../../paths'

const PageWrapper = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-360 min-w-150 flex-col items-center justify-center">
      <header className="w-full bg-[#D9D9D9] px-[6.806%] py-8">
        <div className="mx-auto flex w-full max-w-[1221px] items-center gap-[5.486%]">
          <h1 className="text-[20px] font-medium whitespace-nowrap">
            <Link to="/">Grabber</Link>
          </h1>

          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Пошук товарів"
              className="h-[40px] w-full rounded-[20px] border border-black pr-4 pl-10"
            />

            <img
              src={searchIcon}
              alt="search icon"
              className="absolute top-1/2 left-4 block h-5 w-5 -translate-y-1/2 transform"
            />
          </div>

          <button className="h-[40px] rounded-[20px] bg-white px-6 text-[16px] whitespace-nowrap">
            Створити оголошення
          </button>
          <Link to={PATHS.AUTH.login} className="cursor-pointer">
            <img src={defaultAvatar} alt="avatar" className="block h-10 w-10 rounded-full" />
          </Link>
        </div>
      </header>

      <section className="content w-full grow-1 items-center justify-center">
        <Outlet />
      </section>
    </div>
  )
}

export default PageWrapper
