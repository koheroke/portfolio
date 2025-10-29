<template>
  <div class="top-ttl" ref="textEl"></div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount, watch } from "vue";

const props = defineProps({ text: String, act: Boolean });
const textEl = ref(null);

watch(
  () => props.act,
  async (newval) => {
    if (newval == true) {
      show.value = false;
    }
  }
);
onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
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
          observer.unobserve(entry.target);
        });
      }
    },
    { threshold: 0.8 }
  );
  if (textEl.value) observer.observe(textEl.value);
  onBeforeUnmount(() => {
    if (textEl.value) observer.unobserve(textEl.value);
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
}
</style>
