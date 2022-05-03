import { defineStore } from 'pinia'
import AuthService from '@/services/api/auth.service';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: ''
  }),
  getters: {},
  actions: {
    getUser() {
      return new Promise((resolve, reject) => {
        AuthService.user()
          .then((response) => {
            this.users = response.data
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })

    }
  }
})
