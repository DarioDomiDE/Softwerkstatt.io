<template>
  <div :class="(isOpen ? '' : 'opacity-0 pointer-events-none') + ' z-30 modal fixed w-full h-full top-0 left-0 flex items-center justify-center'">
    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-70" @click="close"></div>
    <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
      <div class="modal-content text-left">
        <div class="flex justify-between items-center pl-6 pr-4 py-4">
          <p class="text-2xl">{{headline}}</p>
        </div>
        <p class="px-6 pb-4">Wie können wir Ihnen helfen, Ihre Software zu verbessern? Wir sind gespannt und freuen uns darauf, Sie kennenzulernen!</p>
        <ul class="bg-gray-100 px-6 pt-4 pb-6">
          <li>Ihr Ansprechpartner: Dario D. Müller</li>
          <li><a href="tel:04025468922">040 254 689 22</a></li>
          <li><a href="mailto:moin@softwerkstatt.io">moin@softwerkstatt.io</a></li>
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