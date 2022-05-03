<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import TheWelcome from '@/components/TheWelcome.vue'
  import { Modal } from 'bootstrap'
  import { getCurrentInstance } from 'vue'
  import { useCounterStore } from '@/stores/counter';

  import type { AxiosResponse, AxiosError } from 'axios'

  const app = getCurrentInstance()
  const  { $http, $api }  = app.appContext.config.globalProperties

  const exampleModal = ref(null)
  let modal: any = null

  const counter = useCounterStore()

  console.log(counter.counter)

  onMounted(()=> {
    modal = new Modal(exampleModal.value)

      // $api.auth.user()

      $http.get('/users/rujealfon')
      .then((response: AxiosResponse) => {
        console.log('response: ', response.data)
      })
      .catch((error: AxiosError) => {
        console.error(error)
      })
  })

  function showModal(): void {
    modal.show()
  }
</script>

<template>
  <main>
    <div class="alert alert-primary" role="alert">
      A simple primary alert—check it out!
    </div>

      <span class="icon-Settings_Sub_AppointmentType"></span>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" @click="showModal()">
      Launch demo modal
    </button>


    <button type="button" class="btn btn-primary" @click="counter.increment()">
      {{counter.doubleCount}}
      {{counter.counter}}
    </button>

   <!-- Modal -->
    <div class="modal fade" ref="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <TheWelcome />
  </main>
</template>

<style lang="scss" scoped>
  .btn-primary {
    color: $primary-red;

    @include hover-active
  }
</style>
