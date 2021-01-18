<template>
  <div v-if="isVisible">
    <div v-if="isOpened" class="fixed top-0 right-0 w-full z-30 h-screen sm:h-auto sm:w-64 p-8 bg-gray-700 text-xl leading-normal text-white">
      <ul>
        <li>Unterstützung</li>
        <li>How-To</li>
        <li>Leistungen</li>
        <li>Handwerk</li>
        <li>Projekte</li>
        <li>Referenzen</li>
      </ul>
    </div>
    <div class="fixed top-0 right-0 mt-4 mr-4 z-30 w-12">
      <svg v-on:click="isOpened = !isOpened" v-if="!isOpened" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="cursor-pointer"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
      <svg v-on:click="isOpened = !isOpened" v-if="isOpened" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="cursor-pointer text-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" /></svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  components: {
  },
  data: () => {
    return {
      isVisible: true,
      isOpened: false
    }
  },
  methods: {
    open() {
      this.isVisible = true; 
    },
    close() {
      this.isVisible = false; 
    }
  }
}
</script>

<style scoped>
#menu {
}
</style>