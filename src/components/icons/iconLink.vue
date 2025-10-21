<template>
  <img :src="src" :alt="alt" class="icon" @click="redirect" />
</template>

<script setup>
const props = defineProps({
  src: String,
  alt: String,
  url: String,
});

function redirect() {
  window.location.href = props.url;
}
</script>

<style scoped>
.icon {
  cursor: pointer;
  transition: transform 0.2s;
}
.icon:hover {
  transform: scale(1.2);
}
</style>
