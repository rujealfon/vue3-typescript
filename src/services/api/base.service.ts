import axios from '@/services/api/axios.service'

export default class RepositoryService {
  protected _axios = axios

  constructor(public base: string) {}

  search(params) {
    return this._axios.get(`${this.base}`, { params })
  }

  detail(id) {
    return this._axios.get(`${this.base}/${id}`)
  }

  create(payload) {
    return this._axios.post(`${this.base}`, payload)
  }

  update(payload) {
    return this._axios.put(`${this.base}/${payload.id}`, payload)
  }

  delete(id) {
    return this._axios.delete(`${this.base}/${id}`)
  }

  // restore(id) {
  //   return this.axios.$put(`${this.base}/${id}`)
  // }
}
