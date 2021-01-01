<template>
  <Welcome />
  <Intro />
  <Services3 />
  <Solutions />
  <Services6 />
  <Knowhow />
  <Projects />
  <References />
  <Footer />
</template>

<script>
import Welcome from './components/Welcome.vue'
import Intro from './components/Intro.vue'
import Services3 from './components/Services3.vue'
import Solutions from './components/Solutions.vue'
import Services6 from './components/Services6.vue'
import Knowhow from './components/Knowhow.vue'
import Projects from './components/Projects.vue'
import References from './components/References.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Welcome,
    Intro,
    Services3,
    Solutions,
    Services6,
    Knowhow,
    Projects,
    References,
    Footer
  }
}
</script>

<style>
</style>