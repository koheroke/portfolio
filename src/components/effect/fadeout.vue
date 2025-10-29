<template>
  <transition name="slow-fade">
    <div v-if="show" class="fadeObj" ref="refFade"></div>
  </transition>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
const show = ref(true);
const refFade = ref(null);
const anmbood = defineProps({
  act: Boolean,
  color: String,
});
onMounted(() => {
  refFade.value.style.backgroundColor = anmbood.color;
});

watch(
  () => anmbood.act,
  async (newval) => {
    if (newval == true) {
      show.value = false;
    }
  }
);
</script>

<style scoped>
.fadeObj {
  background-color: white;
  pointer-events: none;
  width: 100%;
  height: 100%;
  opacity: 1;
  pointer-events: none;
}

.slow-fade-enter-active {
  transform: translate(0%, 0%);
}
.slow-fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}

.slow-fade-enter-from {
  opacity: 0;
  transform: translate(-50%, -50%);
}
.slow-fade-leave-to {
  opacity: 0;
}
</style>
