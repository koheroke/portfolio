<template>
  <div class="title" ref="titleRef">
    <textanm text="AZUMA" />
    <textanm text="portfolio" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const titleRef = ref(null);

const animateColor = () => {
  if (titleRef.value) {
    // 黒から白へ
    titleRef.value.style.color = "white";
  }
};

onMounted(() => {
  if (titleRef.value) {
    // 初期状態を黒に設定
    titleRef.value.style.color = "black";
    // トランジション設定
    titleRef.value.style.transition = "color 2s ease";
  }
});
</script>

<style>
.title {
  font-size: 2rem;
}
</style>
