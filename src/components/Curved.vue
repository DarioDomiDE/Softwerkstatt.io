<template>
  <section :class="'bg-gray-100 relative ' + (fixed ? 'larger-height' : '')" :style="{ padding: (!skipBorderTop ? Math.floor(wantHeight / 2) : 0) + 'px 0 ' + (!skipBorderBottom ? Math.floor(wantHeight / 2) : 0) + 'px 0' }">
    <div v-if="!skipBorderTop" :class="'myborder myborder-top' + (borderTopGray ? ' gray' : '')" :style="{ height: wantHeight + 'px' }"></div>
    <div class="z-10" :class="fixed ? 'fixed bottom-0 w-full' : 'relative'">
      <slot>Content here</slot>
    </div>
    <div v-if="!skipBorderBottom" :class="'myborder myborder-bottom' + (borderBottomGray ? ' gray' : '')" :style="{ height: wantHeight + 'px' }"></div>
  </section>
</template>

<script>
export default {
  name: 'test',
  props: {
    skipBorderTop: Boolean,
    skipBorderBottom: Boolean,
    borderTopGray: Boolean,
    borderBottomGray: Boolean,
    fixed: Boolean
  },
  data: () => {
    return {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      aspectRatio: -1,
      wantHeight: 0
    }
  },
  methods: {
    onResize() {
      this.windowHeight = window.innerHeight
      this.windowWidth = window.innerWidth
      this.refresh()
    },
    refresh() {
      var borderWidth = 1920
      var borderHeight = 400
      var newAspectRatio = this.windowWidth / this.windowHeight
      if(this.aspectRatio != newAspectRatio) {
        this.aspectRatio = newAspectRatio
        var wantAspectRatio = borderWidth / borderHeight
        this.wantHeight = Math.floor(this.windowWidth / wantAspectRatio)
      }
    }
  },
  mounted() {
    this.refresh();
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.onResize);
  }
}
</script>

<style scoped>
.myborder {
  position: absolute;
  width: 100%;
  height: 300px;
  background: url('./../assets/img/border.png') no-repeat left center;
  background-size: cover;
}
.gray {
  background-image: url('./../assets/img/border_gray.png');
}
.myborder-top {
  top: 0;
}
.myborder-bottom {
  bottom: 0;
  -moz-transform: scaleX(-1) scaleY(-1);
  -o-transform: scaleX(-1) scaleY(-1);
  -ms-transform: scaleX(-1) scaleY(-1);
  -webkit-transform: scaleX(-1) scaleY(-1);
  transform: scaleX(-1) scaleY(-1);
}
.larger-height {
  height: 470px;
}
@media (max-width: 768px) {
  .larger-height {
    height: 670px;
  }
}
</style>