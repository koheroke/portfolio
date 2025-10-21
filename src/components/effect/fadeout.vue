<template>
  <transition name="slow-fade">
    <div v-if="show" class="fadeObj"></div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";
const show = ref(true);

onMounted(() => {
  setTimeout(() => {
    show.value = false;
  }, 1500);
});
</script>

<style scoped>
.fadeObj {
  background-color: white;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  pointer-events: none;
}

/* Vue標準トランジションのクラス構成 */
.slow-fade-enter-active,
.slow-fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}

.slow-fade-enter-from,
.slow-fade-leave-to {
  opacity: 0;
}
</style>
