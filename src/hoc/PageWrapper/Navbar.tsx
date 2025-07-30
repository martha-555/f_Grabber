import { Link } from 'react-router-dom'
import { Button, Menu } from '../../components'
import { PATHS } from '../../paths'
import userProfileStore from '../../store/userProfileStore'
import SearchIcon from '../../assets/images/searchIcon.svg?react'
import BasketIcon from '../../assets/images/basketIcon.svg?react'
import BurgerMenu from '../../assets/icons/burger_menu.svg?react'
import CategoriesMenu from './CategoriesMenu'
import { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const user = userProfileStore()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      <h1 className="whitespace-nowrap text-[20px] font-medium">
        <Link to={PATHS.HOME}>Grabber</Link>
      </h1>

      <div className="relative flex-1">
        <div className="flex rounded-[20px] border border-transp-50 px-8 text-b3 text-transp-50 hover:border-primary-30 hover:text-primary-30">
          <input
            type="text"
            placeholder="Пошук товарів"
            className="ml-4 h-[40px] w-full max-w-[485px] rounded-[20px] bg-primary-900 placeholder:pl-[1rem] placeholder:text-b3 placeholder:font-normal focus:border-r-0 focus:outline-none"
          />
          <SearchIcon className="absolute left-4 top-1/2 block h-5 h-[24px] w-5 w-[24px] -translate-y-1/2 transform text-transp-50 hover:text-primary-30" />
          <button className="whitespace-nowrap pr-4">| Категорії</button>
          <div className="m-auto" ref={ref}>
            <BurgerMenu
              onClick={() => setIsOpen(!isOpen)}
              className="m-auto w-[24px] text-transp-50 hover:text-primary-30"
            />
          </div>
          {isOpen && <CategoriesMenu />}
        </div>
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
