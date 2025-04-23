import PageWrapper from '../components/PageWrapper/PageWrapper'
import AddProduct from '../pages/AddProduct'
import Admin from '../pages/Admin'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Main from '../pages/Main'
import Orders from '../pages/Orders'
import ProductDetails from '../pages/ProductDetails'
import Products from '../pages/Products'
import Profile from '../pages/Profile'
import Register from '../pages/Register'

export const routes = [
  {
    path: '/',
    element: <PageWrapper />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <ProductDetails />,
      },
      {
        path: 'add-product',
        element: <AddProduct />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
    ],
  },
]
