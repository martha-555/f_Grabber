import defaultAvatar from '../../assets/images/defaultAvatar.svg'
import searchIcon from '../../assets/images/searchIcon.svg'
import { Link, Outlet } from 'react-router-dom'
import LogOutButton from '../../components/LogOutButton/LogOutButton.tsx'

const PageWrapper = () => {
  return (
    <div className="max-w-360 min-w-150 mx-auto flex min-h-screen flex-col items-center justify-center">
      <header className="fixed left-0 right-0 top-0 z-10 w-full bg-[#D9D9D9] px-[6.806%] py-8">
        <div className="mx-auto flex w-full max-w-[1221px] items-center gap-[5.486%]">
          <h1 className="whitespace-nowrap text-[20px] font-medium">
            <Link to="/">Grabber</Link>
          </h1>

          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Пошук товарів"
              className="h-[40px] w-full rounded-[20px] border border-black pl-10 pr-4"
            />
            <img
              src={searchIcon}
              alt="search icon"
              className="absolute left-4 top-1/2 block h-5 w-5 -translate-y-1/2 transform"
            />
          </div>

          <button className="h-[40px] whitespace-nowrap rounded-[20px] bg-white px-6 text-[16px]">
            Створити оголошення
          </button>

          <img src={defaultAvatar} alt="avatar" className="block h-10 w-10 rounded-full" />
          <LogOutButton />
        </div>
      </header>

      <section className="content grow-1 w-full items-center justify-center">
        <Outlet />
      </section>
    </div>
  )
}

export default PageWrapper
