<template>
  <div :class="(isOpen ? '' : 'opacity-0 pointer-events-none') + ' z-30 modal fixed w-full h-full top-0 left-0 flex items-center justify-center'">
    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" @click="close"></div>
    
    <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
      
      <div class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-3 mr-3 text-white text-sm z-50" @click="close">
        <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 18 18">
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
      </div>

      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="modal-content text-left">
        <!--Title-->
        <div class="flex justify-between items-center pl-6 pr-4 py-4">
          <p class="text-2xl font-bold">Kontakt aufnehmen</p>
          <div class="modal-close cursor-pointer z-50"  @click="close">
            <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>
        </div>

        <!--Body-->
        <p class="px-6 pb-4">Wir können wir Ihnen helfen, Ihre Software zu verbessern?</p>
        <ul class="bg-gray-100 px-6 pt-4 pb-6">
          <li>Ansprechpartner: Dario D. Müller</li>
          <li>040 123 456 789</li>
          <li><a class="" href="mailto:moin@softwerkstatt.io">dario@softwerkstatt.io</a></li>
          <li>Brunckhorstweg 3, 22525 Hamburg</li>
        </ul>

        <!--Footer-->
        <!-- <div class="flex justify-end bg-gray-100 pt-2 px-6 pb-4">
          <button class="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400" @click="close">OK</button>
        </div> -->
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  components: {
  },
  data: () => {
    return {
      isOpen: false
    }
  },
  methods: {
    open() {
      this.isOpen = true;
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