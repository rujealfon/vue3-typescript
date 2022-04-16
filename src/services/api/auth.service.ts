import Repository from "@/repository"

interface Login {
  username: string;
  password: string;
}

export default class Auth extends Repository {
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