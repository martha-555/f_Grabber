import defaultAvatar from '../../assets/images/defaultAvatar.svg'
import searchIcon from '../../assets/images/searchIcon.svg'
import { Link, Outlet } from 'react-router-dom'

const PageWrapper = () => {
  return (
    <div className="max-w-360 min-w-150 mx-auto flex flex-col items-center justify-center min-h-screen">
      <header className="w-full bg-[#D9D9D9] py-8 px-[6.806%]">
        <div className="max-w-[1221px] mx-auto flex items-center gap-[5.486%] w-full">
          <h1 className="text-[20px] font-medium whitespace-nowrap">
            <Link to="/">Grabber</Link>
          </h1>

          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Пошук товарів"
              className="w-full h-[40px] pl-10 pr-4 rounded-[20px] border border-black"
            />
            <img
              src={searchIcon}
              alt="search icon"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5 block"
            />
          </div>

          <button className="h-[40px] px-6 rounded-[20px] bg-white text-[16px] whitespace-nowrap">
            Створити оголошення
          </button>

          <img src={defaultAvatar} alt="avatar" className="w-10 h-10 rounded-full block" />
        </div>
      </header>

      <section className="content grow-1 w-full justify-center items-center">
        <Outlet />
      </section>
    </div>
  )
}

export default PageWrapper
