import { routes } from './routes/routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default function App() {
  const routers = createBrowserRouter(routes)

  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}
