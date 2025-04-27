import { routes } from './routes/routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const routers = createBrowserRouter(routes)

  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
