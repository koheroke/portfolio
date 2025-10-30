<template>
  <transition name="slow-fade">
    <div v-show="show" class="fadeObj" ref="refFade"></div>
  </transition>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
const show = ref(true);
const refFade = ref(null);
const anmbood = defineProps({
  act: Boolean,
  resetAnm: Boolean,
  color: String,
});
onMounted(() => {
  refFade.value.style.backgroundColor = anmbood.color;
});

watch(
  () => anmbood.resetAnm,
  async (newval) => {
    if (newval == true) {
      console.log("show.value = true;");
      show.value = true;
    }
  }
);
watch(
  () => anmbood.act,
  async (newval) => {
    if (newval == true) {
      console.log("show.value = false;");
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

.slow-fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}

.slow-fade-enter-from {
  opacity: 0;
}
.slow-fade-leave-to {
  opacity: 0;
}
.slow-fade-enter-to {
  opacity: 1;
  z-index: 200;
}
</style>
