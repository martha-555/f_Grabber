import { Link, useParams } from 'react-router-dom'
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
  const { category } = useParams()

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
        <div className="hover:border-primary-50 hover:text-primary-50 group flex rounded-[20px] border border-transp-50 px-8 text-b3 text-transp-50">
          <input
            type="text"
            placeholder="Пошук товарів"
            className="bg-primary-950 ml-4 h-[40px] w-full rounded-[20px] placeholder:pl-[1rem] placeholder:text-b3 placeholder:font-normal focus:border-r-0 focus:outline-none"
          />
          <SearchIcon className="absolute left-4 top-1/2 block h-5 h-[24px] w-5 w-[24px] -translate-y-1/2 transform text-transp-50" />
          <div ref={ref} onClick={() => setIsOpen(!isOpen)} className="flex">
            <button className="whitespace-nowrap pr-4">| {category || 'Категорії'}</button>
            <BurgerMenu className="group-hover:text-primary-50 m-auto w-[24px] cursor-pointer text-transp-50" />
          </div>
          {isOpen && <CategoriesMenu />}
        </div>
      </div>
      <Link to={PATHS.PRODUCTS.add}>
        <button className="bg-primary-50 text-primary-950 hover:bg-secondary-brown-100 focus:border-primary-950 focus:bg-secondary-brown-100 active:bg-secondary-brown-3000 h-10 whitespace-nowrap rounded-full px-6 focus:border active:shadow-[inset_0_0_4px_2px_#ABC2F6]">
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
            className="hover:text-primary-950 rounded-[20px] border border-white px-6 py-[0.5rem] text-b4 text-white transition hover:bg-white"
          ></Button>
        </Link>
      )}
    </>
  )
}

export default Navbar
