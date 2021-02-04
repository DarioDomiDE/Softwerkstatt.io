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
  watch: {
    '$route' (to) {
      var postfix = 'Softwerkstatt - Software Entwicklung Consulting Hamburg '
      var title = to.meta.title || ''
      if(title != '') {
        title += ' - '
      }
      title += postfix;
      document.title = title
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>