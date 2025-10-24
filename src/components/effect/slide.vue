<template>
  <div style="padding-top: 10px">
    <div ref="box" class="box">
      {{ props.subtitle }}
      {{ props.text }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const box = ref(null);
const props = defineProps({ subtitle: String, text: String });

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        box.value.classList.add("slidein", "is-animated");
      } else {
        box.value.classList.remove("slidein", "is-animated");
      }
    },
    { threshold: 0.1 }
  );

  if (box.value) observer.observe(box.value);
  onBeforeUnmount(() => {
    if (box.value) observer.unobserve(box.value);
  });
});
</script>

<style>
.box {
  font-size: 30px;
  font-weight: bold;
  width: 300px;
  height: 100px;
  color: black;
  font-family: "Hiragino Sans", "ヒラギノ角ゴシック";
  opacity: 0;
  transform: translateX(180px);
  transition: opacity 0.3s, transform 0.3s;
}

.box.slidein.is-animated {
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
