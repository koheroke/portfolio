<template>
  <div style="height: 150vh; padding-top: 100px">
    <div class="box" v-html="props.profileText"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const box = ref(null);
const props = defineProps({ profileText: String });

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        box.value.classList.add("slidein", "is-animated");
        observer.unobserve(box.value);
      }
    },
    { threshold: 0.1 }
  );

  if (box.value) observer.observe(box.value);
});
</script>

<style>
.anim-box {
  width: 200px;
  height: 100px;
  background-color: skyblue;
  opacity: 0;
  transform: translateX(180px);
  transition: opacity 0.3s, transform 0.3s;
}

.anim-box.slidein.is-animated {
  animation: slideIn 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes slideIn {
  0% {
    transform: translateX(180px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
  40%,
  100% {
    opacity: 1;
  }
}
</style>
