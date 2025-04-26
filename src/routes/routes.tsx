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
import { PATHS } from '../paths'

export const routes = [
  {
    path: PATHS.home,
    element: <PageWrapper />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: PATHS.products,
        element: <Products />,
      },
      {
        path: PATHS.product,
        element: <ProductDetails />,
      },
      {
        path: PATHS.addProduct,
        element: <AddProduct />,
      },
      {
        path: PATHS.login,
        element: <Login />,
      },
      {
        path: PATHS.register,
        element: <Register />,
      },
      {
        path: PATHS.cart,
        element: <Cart />,
      },
      {
        path: PATHS.orders,
        element: <Orders />,
      },
      {
        path: PATHS.profile,
        element: <Profile />,
      },
      {
        path: PATHS.admin,
        element: <Admin />,
      },
    ],
  },
]
