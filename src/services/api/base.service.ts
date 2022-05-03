import axios from '@/services/api/axios.service';

export default class BaseService {
  protected axios = axios

  constructor(
    public base: string
  ) {}

  search(params) {
    return this.axios.get(`${this.base}`, { params })
  }

  detail(id: number) {
    return this.axios.get(`${this.base}/${id}`)
  }

  create(payload) {
    return this.axios.post(`${this.base}`, payload)
  }

  update(payload) {
    return this.axios.put(`${this.base}/${payload.id}`, payload)
  }

  delete(id: number) {
    return this.axios.delete(`${this.base}/${id}`)
  }

  // restore(id) {
  //   return this.axios.$put(`${this.base}/${id}`)
  // }
}