<template>
  <section>
    <div id="gallery">
      <div class="container-lg py-5">
        <div class="row title-text">
          <div
            class="title col-10 col-sm-10 offset-1 d-flex justify-content-start"
          >
            <h1 class="heading m-0 text-light upSlideThrd" ref="upSlideThrd">
              Gallery
            </h1>
          </div>
        </div>
        <div class="row title-text">
          <div
            class="col-8 col-sm-8 offset-1 d-flex justify-content-start heading-text text-light"
          >
            <p class="upSlideFrth" ref="upSlideFrth">
              Various samples of work, a mix of personal projects, client work,
              and concepts that never made it past the drawing board. Enjoy the
              scroll.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  // Animation On Scroll
  data() {
    return {
      observer: null,
      lastY: 0,
    };
  },
  mounted() {
    const obsOptions = {
      threshold: 0.2,
    };
    this.observer = new IntersectionObserver(this.inViewport, obsOptions);
    // Slide UP
    const upSlideThrd = this.$refs.upSlideThrd;
    const upSlideFrth = this.$refs.upSlideFrth;
    if (upSlideThrd) {
      this.observer.observe(upSlideThrd);
    }
    if (upSlideFrth) {
      this.observer.observe(upSlideFrth);
    }
  },
  methods: {
    inViewport(entries) {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
      });
    },
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
};
</script>

<style>
.upSlideThrd {
  transition: 0.2s;
  opacity: 0;
  transform: translateY(50px);
}
.upSlideFrth {
  transition: 0.5s;
  opacity: 0;
  transform: translateY(100px);
}

.upSlideThrd.is-inViewport {
  opacity: 1;
  transition: 0.5s ease;
  transform: translateY(0);
}
.upSlideFrth.is-inViewport {
  opacity: 1;
  transition: 0.6s ease;
  transform: translateY(0);
}
</style>
