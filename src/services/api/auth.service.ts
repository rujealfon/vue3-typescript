import BaseService from "@/services/api/base.service"

interface Login {
  username: string;
  password: string;
}

class AuthService extends BaseService {
  constructor() {
    super('/auth')
  }

   login(payload: Login) {
    return this.axios.post(`/login`, payload)
  }

  logout() {
    return this.axios.get(`/logout`)
  }

  user() {
    return this.axios.get(`/users/rujealfon`)
  }
}

export default new AuthService