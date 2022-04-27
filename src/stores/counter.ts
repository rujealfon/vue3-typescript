import { defineStore } from 'pinia'

export type Item = {
  name: string;
  url: string;
}

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0 as number,
    items: [] as Item[]
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
