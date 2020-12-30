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
h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
}
h1 {
  font-size: 4.8em;
  line-height: 1.0;
}
  h1 span.smaller {
    font-size: 0.75em;
  }
h2 {
  font-size: 3.8em;
}
h3 {
  /* font-size: 3.8em; */
}
h4 {
  /* font-size: 3.8em; */
}
h5 {
  /* font-size: 3.8em; */
}
h6 {
  font-size: 2.0em;
}

h1, h2, h3, h4, h5, h6, p, span {
  font-family: 'Tw Cen MT', sans-serif;
}
</style>