import type { AxiosInstance } from 'axios'

export default class Repository {
  constructor(
    public axios: AxiosInstance,
    public base: string
  ) {}

  search(params) {
    return this.axios.get(`${this.base}`, { params })
  }

  detail(id) {
    return this.axios.get(`${this.base}/${id}`)
  }

  create(payload) {
    return this.axios.post(`${this.base}`, payload)
  }

  update(payload) {
    return this.axios.put(`${this.base}/${payload.id}`, payload)
  }

  delete(id) {
    return this.axios.delete(`${this.base}/${id}`)
  }

  // restore(id) {
  //   return this.axios.$put(`${this.base}/${id}`)
  // }
}