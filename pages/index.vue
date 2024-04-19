<template>
  <section>
    <div id="about">
      <div class="container-lg py-5">
        <div class="row title-text">
          <div
            class="title col-10 col-sm-10 offset-1 d-flex justify-content-start"
          >
            <h1 class="heading m-0 text-light upSlide" ref="upSlide">About</h1>
          </div>
          <div
            class="heading-text col-8 col-sm-8 offset-1 d-flex justify-content-center text-light"
          >
            <p class="upSlideSec" ref="upSlideSec">
              Hi, I'm someone just starting out in the web development field,
              I'm self-taught with a basic understanding of UI and graphic
              design. I still don't think I can be called a junior frontend
              developer, but I have a good understanding in this field.
              <br />
              <br />
              Whether I’m designing a website, product, or pitch deck, I always
              aim to sweat the details, but know that done is sometimes better
              than perfect.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Mainboard />
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
      threshold: 0.5,
    };
    this.observer = new IntersectionObserver(this.inViewport, obsOptions);
    // Slide UP
    const upSlide = this.$refs.upSlide;
    const upSlideSec = this.$refs.upSlideSec;
    if (upSlide) {
      this.observer.observe(upSlide);
    }
    if (upSlideSec) {
      this.observer.observe(upSlideSec);
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
.upSlide {
  transition: 0.2s;
  opacity: 0;
  transform: translateY(50px);
}
.upSlideSec {
  transition: 0.5s;
  opacity: 0;
  transform: translateY(100px);
}

.upSlide.is-inViewport {
  opacity: 1;
  transition: 0.5s ease;
  transform: translateY(0);
}
.upSlideSec.is-inViewport {
  opacity: 1;
  transition: 0.6s ease;
  transform: translateY(0);
}
.heading {
  padding-top: 5rem;
  font-size: 4rem;
}
.heading-text {
  font-size: 1rem;
  padding-top: 4rem;
}
#about {
  padding-bottom: 5rem;
}
</style>
