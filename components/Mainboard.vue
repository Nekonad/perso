<template>
  <section>
    <div id="mainboardBg">
      <div class="container">
        <!-- BOARD UTAMA -->
        <div class="row">
          <div class="col-10 offset-1 pb-4 p-sm-2 p-0">
            <NuxtLink
              to="/gallery"
              target="_self"
              class="nav-link link-exact-active"
              exact-active-class="active"
            >
              <div class="mainboard Main d-flex">
                <div class="image-overlay"></div>
                <!-- BOARD KIRI -->
                <div class="col col-sm-6">
                  <div class="mainboard mainLeft">
                    <div class="subtitle text-light ps-5">
                      <h2 class="subtitleHead">Gallery</h2>
                      <div class="subtitleText">
                        <p>
                          Various samples of work, a mix of personal projects,
                          client work, and concepts that never made it past the
                          drawing board.
                        </p>
                      </div>
                    </div>
                    <div class="main-triggr">
                      <div class="frame1">
                        <img
                          src="/img/F.webp"
                          style="
                            display: block;
                            width: 100%;
                            height: 100%;
                            object-position: center;
                            object-fit: cover;
                          "
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- BOARD KANAN -->
                <div class="col-10 col-sm-6">
                  <div class="mainboard mainRight">
                    <div class="slider">
                      <Swiper
                        :modules="[SwiperAutoplay]"
                        :centeredSlides="true"
                        :loop="true"
                        :allowTouchMove="false"
                        :speed="2000"
                        :loopFillGroupWithBlank="true"
                        :breakpoints="{
                          500: { slidesPerView: 2, spaceBetween: 10 },
                          600: { slidesPerView: 3, spaceBetween: 60 },
                        }"
                        :autoplay="{
                          delay: 0.5,
                          disableOnInteraction: false,
                          reverseDirection: true,
                        }"
                      >
                        <swiper-slide
                          ><img src="/slider/1.webp"
                        /></swiper-slide>
                        <swiper-slide
                          ><img src="/slider/2.webp"
                        /></swiper-slide>
                        <swiper-slide
                          ><img src="/slider/3.webp"
                        /></swiper-slide>
                        <swiper-slide
                          ><img src="/slider/4.webp"
                        /></swiper-slide>
                        <swiper-slide
                          ><img src="/slider/5.webp"
                        /></swiper-slide>
                      </Swiper>
                    </div>
                    <div class="image-overlay-left"></div>
                    <div class="image-overlay-right"></div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <!-- MAINBOARD BAWAH KIRI DAN KANAN -->
        <div
          class="mainboardDown row pt-0 pt-sm-2 d-flex justify-content-center"
        >
          <div class="col-10 col-sm-5 p-0 p-sm-2">
            <!-- MB BAWAH KIRI -->
            <div @click="togglGit = !togglGit" class="mainboard boardLeft">
              <div class="subtitleMb m-0 text-light justify-start ps-5">
                <h2>Get In Touch</h2>
                <div class="subtitle-text pt-1">
                  <p>Let's Talk <i class="bi bi-arrow-down-right px-1"></i></p>
                </div>
              </div>
            </div>
          </div>
          <!-- MB BAWAH KANAN -->
          <div class="col-10 col-sm-5 p-0 p-sm-2 pb-4">
            <nuxt-link
              to="https://www.cakeresume.com/nur-hidayat-e446ba"
              target="_blank"
            >
              <div class="mainboard boardRight">
                <div class="subtitleMb m-0 text-light justify-start ps-5">
                  <h2>Curriculum Vitae</h2>
                  <div class="subtitle-text pt-1">
                    <p>Let's See <i class="bi bi-arrow-up-right px-1"></i></p>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>

      <!-- SLIDE SECTION -->
      <div class="mainboardFooter">
        <div class="container">
          <Transition name="slide" mode="out-in">
            <div v-if="togglGit" class="git">
              <div class="col">
                <div
                  class="git-group d-flex align-items-center justify-content-center"
                >
                  <li class="git-item p-4">
                    <NuxtLink
                      to="https://github.com/Nekonad"
                      target="_blank"
                      class="git-link"
                      ><span class="color-fourth">Github</span></NuxtLink
                    >
                  </li>
                  <li class="git-item p-4">
                    <NuxtLink
                      to="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=hidayatnoer11@gmail.com"
                      target="_blank"
                      class="git-link"
                      ><span class="color-fourth">Gmail</span></NuxtLink
                    >
                  </li>
                  <li class="git-item p-4">
                    <NuxtLink
                      to="https://www.linkedin.com/in/nur-hidayat21/"
                      target="_blank"
                      class="git-link"
                      ><span class="color-fourth">Linkedin</span></NuxtLink
                    >
                  </li>
                  <li class="git-item p-4">
                    <NuxtLink
                      to="https://twitter.com/Noer1114"
                      target="_blank"
                      class="git-link"
                      ><span class="color-fourth">X</span></NuxtLink
                    >
                  </li>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      togglGit: false,
    };
  },
  methods: {
    toggleGit() {
      this.togglGit = !this.togglGit;
    },
  },
};
</script>

<style>
#mainboardBg {
  list-style: none;
  padding: 1rem;
  /* background-color: tomato; */
}

/* BOARD UTAMA */
.mainboard {
  /* background-color: yellow; */
  position: relative;
  /* z-index: 10; */
  cursor: pointer;
  list-style: none;
  background-color: rgb(15, 15, 15);
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid rgb(15, 15, 15);
}
.main {
  padding: 1rem;
}
.Main:hover {
  border: 1px solid #202020;
}

/* BOARD UTAMA END*/

/* TEKS LINK */
.subtitleHead {
  font-size: 18px;
  font-weight: 600;
  pointer-events: none;
  position: relative;
  z-index: 6;
}
.subtitleText {
  position: relative;
  pointer-events: none;

  z-index: 6;
  p {
    margin: 0;
    color: #999;
    font-size: 0.75rem;
    font-weight: 600;
  }
}
/* TEKS LINK END */

/* MAINBOARD BAWAH KANAN */
.boardRight {
  background-color: unset;
  display: flex;
  align-items: center;
  height: 130px;
  border: dashed thin #2d2d2d;
}
.boardRight:hover {
  border: dashed thin #4d4d4d;
  .subtitleMb p {
    opacity: 1;
    transition: 0.5 ease;
    transform: none;
  }
  .subtitle-text {
    .bi-arrow-up-right:before {
      rotate: none;
      opacity: 1;
      transition: 0.2s ease;
    }
  }
}
/* MAINBOARD BAWAH KANAN END*/

/* MAINBOARD BAWAH KIRI */
.boardLeft {
  background-color: unset;
  display: flex;
  align-items: center;
  height: 130px;
  border: solid thin #2d2d2d;
}
.boardLeft:hover {
  background-color: #0a0a0a;
  border: solid thin #4d4d4d;
  .subtitleMb p {
    opacity: 1;
    transition: 0.5 ease;
    transform: none;
  }
  .subtitle-text {
    .bi-arrow-down-right:before {
      rotate: none;
      opacity: 1;
      transition: 0.2s ease;
    }
  }
}
/* MAINBOARD BAWAH KIRI END */

/* SIZE TEKS MAINBOARD KIRI DAN KANAN */
.subtitleMb {
  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }
  p {
    transition: 0.2s ease;
    transform: translateY(-10px);
    opacity: 0;
    margin: 0;
    color: #999;
    font-size: 12px;
    font-weight: 600;
  }
  /* KIRI */
  .subtitle-text {
    .bi-arrow-down-right:before {
      rotate: -90deg;
      opacity: 0;
      transition: 0.2s ease;
    }
    /* kanan */
    .bi-arrow-up-right:before {
      rotate: 90deg;
      opacity: 0;
      transition: 0.2s ease;
    }
  }
}
/* SIZE TEKS MAINBOARD KIRI DAN KANAN */

/* SLIDE SECTION MAINBOARD KIRI */
.slide-enter-active {
  transition: all 0.3s cubic-bezier(0, 0.47, 0.83, 0.75);
}

.slide-leave-active {
  transition: all 0.5s ease-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(40px);
  opacity: 0;
}
.mainboardFooter {
  padding: 3rem;
  position: relative;
}
.git-group {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 16px;
  font-weight: 500;
  list-style: none;
  z-index: 4;
}

.git-link {
  color: #fff;
  font-weight: 600;
}
.git-link:hover {
  color: #00cc99;
  font-weight: 600;
}
/* SLIDE SECTION MAINBOARD KIRI END*/

.mainLeft {
  border-radius: unset;
  position: relative;
  background-color: rgb(15, 15, 15);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;
  overflow: hidden;
}

/* MAINBOARD UTAMA KIRI GRADIENT */
.frame1 {
  position: absolute;
  opacity: 0;
  left: 79px;
  rotate: -30deg;
  filter: blur(32px);
  transform-origin: 50% 50% 0px;
  width: 326px;
  height: 289px;
  overflow: hidden;
  z-index: 2;
  scale: 1.1;
  box-sizing: border-box;
  bottom: -172px;
  transition: 0.5s ease;
}
.frame1:hover {
  position: absolute;
  opacity: 1;
  transform: none;
  filter: blur(40px);
  transform-origin: 50% 50% 0px;
  width: 326px;
  height: 289px;
  overflow: hidden;
  z-index: 2;
  left: 0;
  scale: 1;
  box-sizing: border-box;
  rotate: 0deg;
  transition: 0.5s ease;
}
/* MAINBOARD UTAMA KIRI GRADIENT */

/* MAINBOARD UTAMA KANAN SWIPER */
.mainRight {
  border-radius: unset;
  position: relative;
  /* background-color: rgb(15, 15, 15); */
  display: flex;
  pointer-events: none;
  justify-content: center;
  align-items: center;
  z-index: 6;
  overflow: hidden;
}

.slider img {
  pointer-events: none;
  width: 200px;
  padding: 20px;
  border-radius: 30px;
  height: 100%;
  object-position: center;
  object-fit: cover;
  box-sizing: border-box;
}
.slider {
  overflow: hidden;
  box-sizing: border-box;
  /* background-color: tomato; */
  width: 458px;
  height: 150px;
}
.swiper-wrapper {
  transition-timing-function: linear;
}
.image-overlay-right {
  position: absolute;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgb(15 15 15) 100%
  );
  height: 100%;
  right: 0;
  width: 20%;
  z-index: 10;
}
.image-overlay-left {
  position: absolute;
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0) 0%,
    rgb(15 15 15) 100%
  );
  height: 100%;
  left: 0;
  width: 20%;
  z-index: 10;
}

/* MAINBOARD UTAMA KIRI GRADIENT END*/

/* MEDIA-QUERY */
@media (max-width: 767px) {
  html {
    font-size: 65%;
  }
  .mainboard {
    position: relative;
  }
  .mainLeft {
    position: absolute;
    background-color: unset;
    z-index: 22;
  }
  .slider img {
    width: 200px;
    padding: 50px;
    border-radius: 60px;
    box-sizing: border-box;
  }
  .mainRight {
    /* position: absolute; */
    background-color: unset;
    z-index: 11;
  }
  .mainboardDown {
    align-items: center;
    flex-direction: column-reverse;
  }
  .frame1 {
    pointer-events: none;
    opacity: 1;
    filter: blur(28px);
    width: 60%;
    height: 100%;
    left: 0;
    top: 50px;
    box-sizing: border-box;
    rotate: 15deg;
  }
  .subtitleText {
    padding: 4rem 5rem 0 0;
    p {
      color: #cecece;
      text-align: start;
      font-size: 10px;
      font-weight: 500;
    }
  }

  .slider img {
    pointer-events: none;
    width: 180px;
    padding: 10px;
    border-radius: 20px;
  }
  .image-overlay {
    position: absolute;
    z-index: 21;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
