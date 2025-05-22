import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { TUserProfile } from '../types/types'

type TUserProfileState = {
  userInfo: TUserProfile
  isLoggedIn: boolean
  isLoading: boolean
  isError: boolean
}

type TuserProfileActions = {
  setUserProfile: (userProfile: TUserProfileState) => void
  updateUserProfile: (newProfile: Partial<TUserProfile>) => void
  resetUserProfile: () => void
}

export const initialState: TUserProfileState = {
  userInfo: {
    id: undefined,
    date_joined: undefined,
    email: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    location: '',
    user_photo: undefined,
  },
  isLoggedIn: false,
  isLoading: true,
  isError: false,
}

const userProfileStore = create<TUserProfileState & TuserProfileActions>()(
  devtools((set) => ({
    ...initialState,
    setUserProfile: (userProfile) => set(() => ({ ...userProfile })),
    updateUserProfile: (newProfile) => set((state) => ({ ...state, ...newProfile })),
    resetUserProfile: () => set(() => ({ ...initialState })),
  })),
)

export default userProfileStore
