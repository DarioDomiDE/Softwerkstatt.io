<template>
  <Menu ref="menu" />
  <router-view />
  <Footer />
</template>

<script>
import Menu from './views/Menu.vue'
import Footer from './views/Footer.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Footer
  },
  methods: {
  }
}
</script>

<style scoped>
</style>