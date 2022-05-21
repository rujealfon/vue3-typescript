import { defineStore } from 'pinia'
import AuthService from '@/services/api/auth.service'
import type { Login } from '@/models/login.model'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: '',
  }),
  getters: {
    getToken: (state) => state.token,
  },
  actions: {
    login(payload: Login) {
      return new Promise((resolve, reject) => {
        AuthService.login(payload)
          .then((response) => {
            this.token = response.data.access_token
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
})
