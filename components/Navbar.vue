<template>
  <header>
    <div id="header">
      <div class="container text-light py-5">
        <div class="row align-items-center">
          <div class="col-8 col-sm-6 offset-1">
            <NuxtLink to="/" target="_self" class="nav-link">
              <h2 class="navbrand m-0">NUR<br />HIDAYAT</h2>
            </NuxtLink>
          </div>
          <nav class="col-2 col-sm-4">
            <div class="menu-group d-flex align-items-end justify-content-end">
              <li class="nav-item pe-4">
                <NuxtLink to="/" target="_self" class="nav-link link-active"
                  ><span class="color-fourth">About</span></NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink
                  to="/gallery"
                  target="_self"
                  class="nav-link link-active"
                  ><span class="color-fourth">Gallery</span></NuxtLink
                >
              </li>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
.navbrand {
  font-size: 18px;
  font-weight: 500;
}
.menu-group {
  font-size: 14px;
  font-weight: 500;
  list-style: none;
}

/* .nav-item {
  color: #fff;
} */

.nav-item:hover {
  color: #fff;
}
</style>
