<template>
  <div :class="(isOpen ? '' : 'opacity-0 pointer-events-none') + ' z-30 modal fixed w-full h-full top-0 left-0 flex items-center justify-center'">
    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-70" @click="close"></div>
    <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
      <div class="modal-content text-left">
        <div class="flex justify-between items-center pl-6 pr-4 py-4">
          <p class="text-2xl font-bold">{{headline}}</p>
          <div class="modal-close cursor-pointer z-50"  @click="close">
            <svg class="fill-current text-black hover:bg-black hover:text-white rounded" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>
        </div>
        <p class="px-6 pb-4">Wie können wir Ihnen helfen, Ihre Software zu verbessern? Wir sind gespannt drauf und freuen uns darauf, Sie kennenzulernen!</p>
        <ul class="bg-gray-100 px-6 pt-4 pb-6">
          <li>Ansprechpartner: Dario D. Müller</li>
          <li><a href="tel:040123456789">040 123 456 789</a></li>
          <li><a class="" href="mailto:moin@softwerkstatt.io">moin@softwerkstatt.io</a></li>
          <li>Brunckhorstweg 3, 22525 Hamburg</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data: () => {
    return {
      isOpen: false,
      headline: ''
    }
  },
  methods: {
    open(value) {
      this.headline = value  != '' ? value : 'Kontakt aufnehmen'
      this.isOpen = true
    },
    close() {
      this.isOpen = false;
      this.$emit('modalClosed', '')
    }
  }
}
</script>

<style scoped>
  .modal {
    transition: opacity 0.25s ease;
  }
  body.modal-active {
    overflow-x: hidden;
    overflow-y: visible !important;
  }
</style>