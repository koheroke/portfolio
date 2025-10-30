<template>
  <div ref="strokeRef" class="stroke is-animated">
    <div class="border top"></div>
    <div class="border right"></div>
    <div class="border bottom"></div>
    <div class="border left"></div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const strokeRef = ref(null);
onMounted(() => {
  strokeRef.value.classList.remove("is-animated");
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        strokeRef.value.classList.add("is-animated");
      }
    },
    { threshold: 0.6 }
  );
  if (strokeRef.value) observer.observe(strokeRef.value);
  onBeforeUnmount(() => {
    if (strokeRef.value) observer.unobserve(strokeRef.value);
  });
});
</script>

<style scoped>
.stroke {
  background: none;
  max-width: 400px;
  height: 100%;
  position: relative;
}

.stroke .border {
  position: absolute;
  opacity: 0;
}

/* 横線 */
.stroke .border.top,
.stroke .border.bottom {
  width: 0;
  height: 4px;
}

.stroke .border.top {
  border-top: 19px solid #000000;
  top: 0;
  left: 10px;
  background-color: #000000;
}

.stroke .border.bottom {
  border-bottom: 19px solid #000000;
  bottom: 0;
  left: 10px;
  background-color: #000000;
}

.stroke .border.right,
.stroke .border.left {
  width: 4px;
  height: 0px;
  background-color: #000000;
}

.stroke .border.right {
  border-right: 19px solid #000000;
  top: 10px;
  right: 0;
}

.stroke .border.left {
  border-left: 19px solid #000000;
  top: 10px;
  left: 0;
}

.stroke.is-animated .border {
  opacity: 1;
}

.stroke.is-animated .border.top {
  animation: stroke-width 0.5s forwards;
}

.stroke.is-animated .border.right {
  animation: stroke-height 0.5s forwards;
}

.stroke.is-animated .border.bottom {
  animation: stroke-width 0.5s forwards;
}

.stroke.is-animated .border.left {
  animation: stroke-height 0.5s forwards;
}

@keyframes stroke-width {
  from {
    width: 0;
  }
  to {
    width: calc(100% - 20px);
  }
}

@keyframes stroke-height {
  from {
    height: 0;
  }
  to {
    height: calc(100% - 20px);
  }
}
</style>
