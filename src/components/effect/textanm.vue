<template>
  <div class="top-ttl" ref="textEl"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({ text: String });
const textEl = ref(null);

onMounted(() => {
  const container = textEl.value;
  container.textContent = "";

  props.text.split("").forEach((char, i) => {
    const outer = document.createElement("span");
    outer.style.display = "inline-block";
    outer.style.overflow = "hidden";

    const inner = document.createElement("span");
    inner.textContent = char;
    inner.style.display = "inline-block";
    inner.style.transform = "translateY(100%)";
    inner.style.opacity = "0";
    inner.style.animation = `showText 0.5s forwards`;
    inner.style.animationDelay = `${i * 0.2}s`;

    outer.appendChild(inner);
    container.appendChild(outer);
  });
});
</script>

<style>
@keyframes showText {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.top-ttl {
  font-family: Impact;
}
</style>
