<template>
  <Welcome />
  <Intro />
  <Services3 />
  <Solutions />
  <Services6 />
  <Technical />
  <Projects />
  <References />
  <Footer />
  <Footer2 />
</template>

<script>
import Welcome from './components/Welcome.vue'
import Intro from './components/Intro.vue'
import Services3 from './components/Services3.vue'
import Solutions from './components/Solutions.vue'
import Services6 from './components/Services6.vue'
import Technical from './components/Technical.vue'
import Projects from './components/Projects.vue'
import References from './components/References.vue'
import Footer from './components/Footer.vue'
import Footer2 from './components/Footer2.vue'

export default {
  name: 'App',
  components: {
    Welcome,
    Intro,
    Services3,
    Solutions,
    Services6,
    Technical,
    Projects,
    References,
    Footer,
    Footer2
  }
}
</script>

<style scoped>
</style>