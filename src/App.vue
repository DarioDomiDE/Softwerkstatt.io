<template>
  <Menu />
  <Welcome />
  <Intro />
  <Services3 />
  <Howto />
  <Services6 />
  <Technical />
  <Projects />
  <References />
  <Footer />
</template>

<script>
import Welcome from './components/Welcome.vue'
import Intro from './components/Intro.vue'
import Services3 from './components/Services3.vue'
import Howto from './components/Howto.vue'
import Services6 from './components/Services6.vue'
import Technical from './components/Technical.vue'
import Projects from './components/Projects.vue'
import References from './components/References.vue'
import Footer from './components/Footer.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Welcome,
    Intro,
    Services3,
    Howto,
    Services6,
    Technical,
    Projects,
    References,
    Footer,
    Menu
  }
}
</script>

<style scoped>
</style>