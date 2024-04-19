<template>
  <Navbar />
  <slot />
  <Footer />
</template>
<script>
export default {};
</script>
<style>
.link-active {
  color: #545454;
}

.link-exact-active {
  color: #fff;
  /* color: tomato; */
}
</style>
