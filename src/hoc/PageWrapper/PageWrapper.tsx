import { Outlet } from 'react-router-dom'
import Header from './Header.tsx'
import Footer from './Footer.tsx'

const PageWrapper = () => {
  return (
    <>
      <Header />
      <section className="content grow-1 w-full items-center">
        <Outlet />
      </section>
      <Footer />
    </>
  )
}

export default PageWrapper
