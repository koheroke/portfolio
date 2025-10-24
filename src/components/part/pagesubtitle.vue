<template>
  <div class="subtitle">
    {{ subtitle.text }}
  </div>
</template>
<script setup>
const subtitle = defineProps({
  text: String,
});
</script>
<style scoped>
.subtitle {
  font-size: 50px;
  font-family: "Hiragino Sans", "ヒラギノ角ゴシック";
}
</style>
