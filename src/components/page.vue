<template>
  <div ref="parentDiv" class="mainContent">
    <div class="loby"><Loby /></div>
    <div class="profile"><Profile /></div>
    <div class="opus"><Opus /></div>
  </div>
</template>

<script setup>
import { ref, shallowRef, watch, onMounted } from "vue";
import Profile from "./minePages/profile.vue";
import Opus from "./minePages/opus.vue";
import Career from "./minePages/career.vue";
import Loby from "./minePages/loby.vue";
import Skill from "./minePages/skill.vue";
const currentComponent = shallowRef(Loby);
const parentDiv = ref(null);
const sidebar = defineProps({
  select: String,
  close: Boolean,
});

function scrollTo(className) {
  const el = document.getElementsByClassName(className);
  if (el.length > 0) {
    el[0].scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
watch(
  () => sidebar.select,
  (newPage) => {
    scrollTo(newPage);
  }
);
</script>
<style scoped>
.mainContent {
  position: relative;
  width: 100vw;
  overflow: visible;
  top: 0vh;
  display: flex;
  flex-direction: column;
}
.loby {
  width: 100vw;
  height: 100vh;
}
.opus {
  width: 100vw;
  height: 100vh;
}
.profile {
  width: 100vw;
  height: 100vh;
}
@keyframes movepage {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100vh);
  }
}
.mainContent.movepage.is-animated {
  animation: movepage 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
</style>
