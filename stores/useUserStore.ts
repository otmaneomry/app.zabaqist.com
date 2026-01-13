import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: number | null
  token: string | null
  email: string | null
  name: string | null
  avatar: string | null
  country: string | null
}

interface UserStore {
  user: User
  setUser: (user: User) => void
  logout: () => void
  isAuthenticated: () => boolean
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: {
        id: null,
        token: null,
        email: null,
        name: null,
        avatar: null,
        country: null,
      },
      setUser: (user) => set({ user }),
      logout: () => set({
        user: {
          id: null,
          token: null,
          email: null,
          name: null,
          avatar: null,
          country: null,
        }
      }),
      isAuthenticated: () => get().user.token !== null,
    }),
    {
      name: 'zabaqist-user-storage',
    }
  )
)
