import { PageWrapper } from '../hoc'
import {
  AddProduct,
  Admin,
  Cart,
  Login,
  Main,
  Orders,
  ProductDetails,
  Products,
  Profile,
  Register,
} from '../pages'

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
