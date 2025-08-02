import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="fixed top-0 z-10 w-max min-w-full bg-primary-950 px-[120px] py-6 text-[#FFFFFF]">
      <div className="mx-auto flex w-full items-center gap-9">
        <Navbar />
      </div>
    </header>
  )
}

export default Header
