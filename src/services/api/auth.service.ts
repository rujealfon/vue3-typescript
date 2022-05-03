import BaseService from "@/services/api/base.service"
import type { Login } from "@/models/login.model"

class AuthService extends BaseService {
  constructor() {
    super('/auth')
  }

   login(payload: Login) {
    return this.axios.post(`${this.base}/login`, payload)
  }

  logout() {
    return this.axios.get(`${this.base}/logout`)
  }

  user() {
    return this.axios.get(`/users/rujealfon`)
  }
}

export default new AuthService