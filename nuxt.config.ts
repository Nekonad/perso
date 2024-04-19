// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  spaLoadingTemplate: true,
  devtools: { enabled: false },
  pages: true,
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: ".N",
      meta: [{ name: "description", content: "hello." }],
      //  link  //
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico" },

        //  link Bootstrap  //
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
        },
        //  link Bootstrap Icon  //
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
        },
        //  link Google Font Montserrat //
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
      //  separator SCRIPT //
      script: [
        {
          src: "https://code.jquery.com/jquery-3.7.1.min.js",
          // body: true
        },
      ],
    },
  },
  //  separator CSS //
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-swiper"],
  router: {
    options: {
      // linkActiveClass: "link-active",
      linkExactActiveClass: "link-exact-active", //lebih ke arah tautan
    },
  },
});
