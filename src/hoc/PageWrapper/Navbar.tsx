import { Link } from 'react-router-dom'
import { Button, Menu } from '../../components'
import { PATHS } from '../../paths'
import userProfileStore from '../../store/userProfileStore'
import searchIcon from '../../assets/images/searchIcon.svg'
import BasketIcon from '../../assets/images/basketIcon.svg?react'

const Navbar = () => {
  const user = userProfileStore()

  return (
    <>
      <h1 className="whitespace-nowrap text-[20px] font-medium">
        <Link to={PATHS.HOME}>Grabber</Link>
      </h1>

      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Пошук товарів"
          className="h-[40px] w-full rounded-[20px] border-0.5 border-[#FFFFFF] bg-primary-900 pl-10 pr-4 text-b4 font-normal placeholder:pl-[1rem] placeholder:text-[1.125rem] placeholder:font-normal"
        />
        <img
          src={searchIcon}
          alt="search icon"
          className="absolute left-4 top-1/2 block h-5 h-[24px] w-5 w-[24px] -translate-y-1/2 transform"
        />
      </div>
      <Link to={PATHS.PRODUCTS.add}>
        <button className="h-10 whitespace-nowrap rounded-full bg-white px-6 text-primary-900 hover:bg-secondary-blue-50 focus:border focus:border-primary-900 focus:bg-secondary-blue-50 active:bg-secondary-blue-200 active:shadow-[inset_0_0_4px_2px_#ABC2F6]">
          Створити оголошення
        </button>
      </Link>
      <Link to="#">
        <BasketIcon />
      </Link>
      {user.isLoggedIn ? (
        <Menu />
      ) : (
        <Link to={PATHS.AUTH.login}>
          <Button
            text="Вхід"
            className="rounded-[20px] border border-white px-6 py-[0.5rem] text-b4 text-white transition hover:bg-white hover:text-primary-900"
          ></Button>
        </Link>
      )}
    </>
  )
}

export default Navbar
