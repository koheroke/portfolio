<template>
  <transition name="slow-fog">
    <div v-show="find" class="fog" ref="fogref"></div>
  </transition>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";

const find = ref(true);
const fogref = ref(null);
let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        find.value = false;
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.8 }
  );

  if (fogref.value) observer.observe(fogref.value);
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.fog {
  position: absolute;
  background-color: rgb(255, 255, 255);
  z-index: 40;
  width: 100%;
  height: 100%;
}

.slow-fog-enter-active,
.slow-fog-leave-active {
  transition: opacity 1.5s ease-in-out;
}

.slow-fog-enter-from,
.slow-fog-leave-to {
  opacity: 0;
}
</style>
