<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
</template>

<script setup>
import 'gitart-vue-dialog/dist/style.css'
const version = 2 + 1;

const message = ref("Nuxt");

function hello() {
  sayHello(message.value);
}
</script>
<style>
body {
  margin: 0 auto !important;
}
</style>
