<template>
  <button class="bg-white rounded shadow hover:shadow-none border-2 hover:bg-transparent transform scale-102 transition-all outline-none focus:outline-none px-5 sm:px-8 py-3 sm:py-4 text-md sm:text-xl mb-8 sm:mb-0" v-on:click="onClick">
    <slot>UNVERBINDLICH ANFRAGEN</slot> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="20" width="20" class="inline-block align-text-top"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
  </button>
</template>

<script>
// var self = this;
export default {
  name: 'CtaButton',
  components: {
  },
  methods: {
    onClick() {
      this.$emit('clicked', '');
    }
  }
}
</script>

<style scoped>
</style>