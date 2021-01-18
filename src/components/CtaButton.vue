<template>
  <button class="bg-white rounded-full shadow-md hover:shadow-xl transform scale-101 transition-all outline-none focus:outline-none font-semibold px-8 py-3 text-xl text-gray-700" v-on:click="onClick">
    <slot>UNVERBINDLICH ANFRAGEN</slot> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="20" width="20" class="inline-block align-text-top"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
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
.scale-101:hover {
  --tw-scale-x: 1.01;
  --tw-scale-y: 1.01;
}
</style>