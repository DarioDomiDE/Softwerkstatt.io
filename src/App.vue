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
  }
}
</script>

<style scoped>
</style>