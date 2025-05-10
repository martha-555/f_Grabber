import { PageWrapper } from '../hoc'
import PrivateRoute from '../hoc/PrivateRoute/PrivateRoute'
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
import EditProfile from '../pages/EditProfile'
import { PATHS } from '../paths'

export const routes = [
  {
    path: PATHS.HOME,
    element: <PageWrapper />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: PATHS.PRODUCTS.list,
        element: <Products />,
      },
      {
        path: PATHS.PRODUCTS.details,
        element: <ProductDetails />,
      },
      {
        path: PATHS.PRODUCTS.add,
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: PATHS.AUTH.login,
        element: <Login />,
      },
      {
        path: PATHS.AUTH.register,
        element: <Register />,
      },
      {
        path: PATHS.CART,
        element: <Cart />,
      },
      {
        path: PATHS.ORDERS,
        element: <Orders />,
      },
      {
        path: PATHS.PROFILE.profile,
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: PATHS.PROFILE.edit,
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
      },
      {
        path: PATHS.ADMIN,
        element: (
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        ),
      },
    ],
  },
]
