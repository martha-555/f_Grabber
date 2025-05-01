import defaultAvatar from '../../assets/images/defaultAvatar.svg'
import searchIcon from '../../assets/images/searchIcon.svg'
import { Link, Outlet } from 'react-router-dom'
import LogOutButton from '../../components/LogOutButton/LogOutButton.tsx'

const PageWrapper = () => {
  return (
    <>
      <header className="w-full bg-[#D9D9D9] px-[6.806%] py-8 font-[montserrat]">
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
          <Link to="/profile">
            <img src={defaultAvatar} alt="avatar" className="block h-10 w-10 rounded-full" />
          </Link>
        </div>
      </header>
      <section className="content grow-1 w-full items-center justify-center">
        <Outlet />
      </section>
    </>
  )
}

export default PageWrapper
