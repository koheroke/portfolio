<template>
  <div class="pagetitle">{{ title.text }}</div>
</template>
<script setup>
const title = defineProps({
  text: String,
});
</script>

<style scoped>
.pagetitle {
  font-size: 80px;
  font-family: Impact;
  z-index: 10;
  color: rgb(70, 69, 69);
}
</style>
