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
  ADS: {
    create: '/api/ads/',
    moderation: '/api/ads/moderation/',
    addImage: '/api/ads/{ad_id}/add-image/',
    approve: '/api/ads/{ad_id}/approve/',
    reject: '/api/ads/{ad_id}/reject/',
  },
  AUTH: {
    login: '/api/user/login/',
    logout: '/api/user/logout/',
    register: '/api/user/register/',
    forgotPassword: '/api/user/forgot-password/',
    refreshToken: '/api/user/refresh/',
  },
  PROFILE: {
    get: '/api/user/profile/',
    patch: '/api/user/profile/',
    uploadProfilePhoto: '/api/user/upload-profile-image/',
    setNewPassword: '/api/user/reset-password/',
    deleteUser: '/api/user/delete/',
  },
  ORDERS: {
    list: '/api/orders/',
  },
}
