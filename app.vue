<template>
  <div id="__layout">
    <ClientOnly>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </ClientOnly>
  </div>
</template>
<script setup>
await useAsyncData(() => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
});
</script>
