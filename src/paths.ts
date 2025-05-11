export const PATHS = {
  HOME: '/',
  PRODUCTS: {
    list: '/products',
    details: '/products/:id',
    add: '/add-product',
  },
  CART: '/cart',
  AUTH: {
    login: '/login',
    register: '/register',
  },
  PROFILE: {
    profile: '/profile',
    edit: '/profile/edit',
  },
  ORDERS: '/orders',
  ADMIN: '/admin',
}

export const API_ENDPOINTS = {
  PRODUCTS: {
    list: '/api/products/',
    details: '/api/products/1/',
    add: '/api/products/',
  },
  AUTH: {
    login: '/user/login/',
    logout: '/user/logout/',
    register: '/user/register/',
    forgotPassword: '/user/forgot-password/',
    refreshToken: '/user/refresh/',
  },
  PROFILE: {
    get: '/user/profile/',
    patch: '/user/profile/',
    uploadProfilePhoto: '/user/upload-profile-image/',
    setNewPassword: '/user/reset-password/',
    deleteUser: '/user/delete/',
  },
  ORDERS: {
    list: '/api/orders/',
  },
}
