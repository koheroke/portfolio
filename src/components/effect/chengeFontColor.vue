<template>
  <div class="title" ref="titleRef">
    <textanm text="AZUMA" />
    <textanm text="portfolio" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const titleRef = ref(null);
onMounted(() => {
  if (titleRef.value) {
    titleRef.value.style.color = "black";
    titleRef.value.style.transition = "color 2s ease";
  }
});
</script>

<style>
.title {
  font-size: 2rem;
}
</style>
