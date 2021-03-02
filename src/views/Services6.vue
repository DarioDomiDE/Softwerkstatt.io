<template>
  <curved class="gradient min-h-0" v-bind:borderTopGray="true">
    <div class="container max-w-screen-xl pb-4 px-4 md:px-8 2xl:px-0 text-center" id="services6">
      <span class="pre-headline color1">Services</span>
      <h1>Leistungen</h1>
      <p class="mb-12 mx-auto w-full md:max-w-4xl text-left sm:text-center">Unsere Domäne, hierbei haben wir Spaß. Wir sind im Herzen Techies. Und unterstützen unsere Kunden in allen Phasen ihrer Digitalisierung. Eine Auwahl, was uns besonders am Herzen liegt:</p>
      <div id="articlesContainer">
        <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-8 text-left">
          <article :class="isActive(0) ? 'active' : '' + isEffect == 0 ? 'is-effect' : afterEffect == 0 ? 'after-effect' : ''" @mouseover="isEffect = 0" v-on:click="onClickActive(0)">
            <h3>
              <span>Strategie</span>
              <div class="effect" :class="orientations[0] == 1 ? 'top' : orientations[0] == 2 ? 'right' : orientations[0] == 3 ? 'bottom' : 'left'">
                <span class="text">Strategie</span>
              </div>
            </h3>
            <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></span>
            <p>Als branchenübergreifender Dienstleister kombinieren wir Erfahrungen aus diversen Disziplinen, um komplexe Projekte in Ihre Bestandteile zu zerlegen und mit optimalen Strategien Ihre Prozesse zu verbinden. Wir unterstützen Sie dabei, zielgerichtet und erfolgreich, Marktrisiken zu verringern.</p>
          </article>
          <article :class="isActive(1) ? 'active' : '' + isEffect == 1 ? 'is-effect' : ''" @mouseover="isEffect = 1" v-on:click="onClickActive(1)">
            <h3>
              <span>Software Consulting</span>
              <div class="effect" :class="orientations[1] == 1 ? 'top' : orientations[1] == 2 ? 'right' : orientations[1] == 3 ? 'bottom' : 'left'">
                <span class="text">Software Consulting</span>
              </div>
            </h3>
            <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></span>
            <p>Was braucht Ihre Lösung: Schnellste am Markt oder die Beste am Markt? Wir beraten Sie rund um Technologien und Frameworks und hinterfragen mit Ihnen, was für Sie wirklich wichtig ist statt nur dringend zu sein. Ist ein Prozess effizient? Oder nur effektiv?</p>
          </article>
          <article :class="isActive(2) ? 'active' : '' + isEffect == 2 ? 'is-effect' : ''" @mouseover="isEffect = 2" v-on:click="onClickActive(2)">
            <h3>
              <span>Programmierung</span>
              <div class="effect" :class="orientations[2] == 1 ? 'top' : orientations[2] == 2 ? 'right' : orientations[2] == 3 ? 'bottom' : 'left'">
                <span class="text">Programmierung</span>
              </div>
            </h3>
            <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></span>
            <p>Unser Herzstück: Wir bieten Ihnen unsere Erfahrung bei der Programmierung maßgeschneiderter Tools, Backends und Datenbanken an. Wir lieben Open Source, plattformübergreifend nutzbare Software und das Microsoft Ökosystem.</p>
          </article>
          <article :class="isActive(3) ? 'active' : '' + isEffect == 3 ? 'is-effect' : ''" @mouseover="isEffect = 3" v-on:click="onClickActive(3)">
            <h3>
              <span>UX</span>
              <div class="effect" :class="orientations[3] == 1 ? 'top' : orientations[3] == 2 ? 'right' : orientations[3] == 3 ? 'bottom' : 'left'">
                <span class="text">UX</span>
              </div>
            </h3>
            <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></span>
            <p>Wir validieren ständig das Look &amp; Feel mithilfe von Mockups, Feedback-Loops und A/B-Tests direkt am Nutzer. Mit Konzepten wie Design Thinking und Design Concepts werden wir uns dabei ab Tag 1 Feedback-getrieben auf die UX fokussieren.</p>
          </article>
          <article :class="isActive(4) ? 'active' : '' + isEffect == 4 ? 'is-effect' : ''" @mouseover="isEffect = 4" v-on:click="onClickActive(4)">
            <h3>
              <span>Konzeption</span>
              <div class="effect" :class="orientations[4] == 1 ? 'top' : orientations[4] == 2 ? 'right' : orientations[4] == 3 ? 'bottom' : 'left'">
                <span class="text">Konzeption</span>
              </div>
            </h3>
            <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></span>
            <p>Wir beraten Sie von der Idee bis zum Livegang, und unterstützen Sie dabei, mit einem anforderungsgerechtem Konzept den Grundstein für Potenzialsteigerungen zu setzen, indem wir mit Ihnen gemeinsam Lösungen auszuarbeiten und ein indivuelles Konzept erstellen.</p>
          </article>
          <article :class="isActive(5) ? 'active' : '' + isEffect == 5 ? 'is-effect' : ''" @mouseover="isEffect = 5" v-on:click="onClickActive(5)">
            <h3>
              <span>Web Solutions</span>
              <div class="effect" :class="orientations[5] == 1 ? 'top' : orientations[5] == 2 ? 'right' : orientations[5] == 3 ? 'bottom' : 'left'">
                <span class="text">Web Solutions</span>
              </div>
            </h3>
            <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></span>
            <p>Corporate Websites und interne Web-Applikationen müssen hohen Anforderungen genügen: Plattformübergreifend auf Desktop und Mobile nutzbar sein, schnelle Ladezeiten gewährleisten und dem Unternehmen erlauben, Inhalte über ein CMS selbständig anzupassen.</p>
          </article>
        </div>
        <div class="hidden xl:block area area-y area-left" @mouseover="disableEffect(), left(1), left(4)"></div>
        <div class="hidden xl:block area area-y area-center1" @mouseover="disableEffect(), right(1), right(4), left(2), left(5)"></div>
        <div class="hidden xl:block area area-y area-center2" @mouseover="disableEffect(), right(2), right(5), left(3), left(6)"></div>
        <div class="hidden xl:block area area-y area-right" @mouseover="disableEffect(), right(3), right(6)"></div>
        <div class="hidden xl:block area area-x area-top" @mouseover="disableEffect(), top(1), top(2), top(3)"></div>
        <div class="hidden xl:block area area-x area-middle" @mouseover="disableEffect(), bottom(1), bottom(2), bottom(3), top(4), top(5), top(6)"></div>
        <div class="hidden xl:block area area-x area-bottom" @mouseover="disableEffect(), bottom(4), bottom(5), bottom(6)"></div>
      </div>
      <CtaButton class="mt-16 mb-8 hover:text-white" @clicked="onClickCta">Jetzt Potential nutzen</CtaButton>
    </div>
  </curved>
</template>

<script>
import Curved from './Curved.vue'
import CtaButton from './CtaButton.vue'
export default {
  name: 'Solutions',
  components: {
    Curved,
    CtaButton
  },
  data: () => {
    return {
      active: [],
      orientations: [4,4,4,4,4,4], // 1,2,3,4 => top,right,bottom,left
      isEffect: -1,
      afterEffect: -1
    }
  },
  methods: {
    onClickActive(id) {
      var i;
      if(!this.isActive(id)) {
        if(this.isDesktop()) {
          if(id >= 3) {
            for (i = 0; i < 3; i++) {
              if(this.isActive(i)) {
                this.disableActive(i);
              }
            }
          } else {
            for (i = 3; i < 6; i++) {
              if(this.isActive(i)) {
                this.disableActive(i);
              }
            }
          }
        } else {
          for (i = 0; i < 6; i++) {
            if(this.isActive(i)) {
              this.disableActive(i);
            }
          }
        }
        this.enableActive(id)
      } else {
        this.disableActive(id);
      }
    },
    disableActive(id) {
      var index = this.active.indexOf(id)
      this.active.splice(index, 1)
    },
    enableActive(id) {
      this.active.push(id)
    },
    isActive(id) {
      return this.active.indexOf(id) !== -1
    },
    onClickCta() {
      this.$emit('clicked', 'Potential nutzen')
    },
    disableEffect() {
      if(this.isEffect != -1) {
        setTimeout(() => {
          this.isEffect = -1;
        }, 400);
      }
    },
    left(id) {
      this.orientations[id-1] = 4;
    },
    right(id) {
      this.orientations[id-1] = 2;
    },
    top(id) {
      this.orientations[id-1] = 1;
    },
    bottom(id) {
      this.orientations[id-1] = 3;
    },
    isDesktop() {
      return window.innerWidth >= 1280;
    }
  }
}
</script>

<style scoped>
#services6,
#services6 h1,
#services6 h3 {
  color: #fff;
}
.gradient {
  background: linear-gradient(45deg, #36c1c7 0%, #67dfc4 90%) !important;
}
#articlesContainer {
  position: relative;
}
article {
  border: 1px solid transparent;
  transition: all 0.6s;
  overflow: hidden;
  cursor: pointer;
  height: fit-content;
}
article.active .icon {
  transform: rotate(180deg);
}
h3 {
  position: relative;
  margin-bottom: 0;
  overflow: hidden;
  border: 1px solid transparent;
  border-bottom: none;
  margin-top: 0;
}
.active h3 {
  border-color: #fff;
}
h3 span {
  font-size: 1.0em;
  line-height: 1.0em;
  padding-left: 10px;
}
article p {
  border: 1px solid #fff;
  border-top: none;
  padding: 0 10px 10px 10px;
  display: none;
}
article.active p {
  display: block;
}
.effect {
  position: absolute;
  left: -100%;
  top: 0;
  background-color: #fff;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
article .effect.right {
  left: 100%;
}
article .effect.top {
  left: 0;
  top: -100%;
}
article .effect.bottom {
  left: 0;
  top: 100%;
}
article:hover .effect {
  left: 0;
  top: 0;
}
article.is-effect .effect {
  transition: all 0.4s ease 0s;
}
article .effect .text {
  position: relative;
  color: #5FCCC7;
  transition: all 0.4s ease 0s;
}
article .effect.left .text {
  left: 100%;
  top: 0;
}
article .effect.right .text {
  left: -100%;
  top: 0;
}
article .effect.top .text {
  left: 0;
  top: 100%;
}
article .effect.bottom .text {
  left: 0;
  top: -100%;
}
article:hover .effect .text {
  left: 0;
  top: 0;
}
.icon {
  float: right;
  margin: -40px 25px 0 0;
  width: 30px;
  height: 30px;
}
.area {
  position: absolute;
}
  .area-y {
    top: -30px;
    width: 30px;
    height: calc(100% + 2 * 30px);
  }
  .area-left {
    left: -30px;
  }
  .area-center1 {
    left: calc((100% - 2 * 2rem) / 3);
    width: 30px;
  }
  .area-center2 {
    left: calc((100% - 2 * 2rem) / 3 * 2 + 2rem);
    width: 30px;
  }
  .area-right {
    right: -30px;
  }
  .area-x {
    left: -30px;
    width: calc(100% + 2 * 30px);
    height: 30px;
  }
  .area-top {
    top: -30px;
  }
  .area-middle {
    top: calc(50% - 30px / 2);
  }
  .area-bottom {
    bottom: -30px;
  }
</style>