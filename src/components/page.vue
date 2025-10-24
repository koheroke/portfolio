<template>
  <div ref="parentDiv" class="mainContent">
    <div class="loby"><Loby /></div>
    <div class="profile"><Profile /></div>
    <div class="skill"><Skill /></div>
    <div class="career"><Career @scrollManeger="scrollBool" /></div>
    <div class="ops"><Opus /></div>
    <div class="underbar"><underbar /></div>
  </div>
</template>

<script setup>
import { ref, shallowRef, watch, onMounted } from "vue";
import Profile from "./minePages/profile.vue";
import Opus from "./minePages/opus.vue";
import Career from "./minePages/career.vue";
import Loby from "./minePages/loby.vue";
import underbar from "./minePages/underbar.vue";
import Skill from "./minePages/skill.vue";
import { ScrollManager } from "../jsModule/scrollManege";
const scrollManager = new ScrollManager();
const parentDiv = ref(null);
const sidebar = defineProps({
  select: String,
  close: Boolean,
});

const scrollBool = async (thisbool) => {
  console.log(thisbool.value);
  if (thisbool.value) {
    scrollManager.resume();
    console.log("true");
  } else {
    await scrollTo("career");
    console.log("stop");
    scrollManager.stop();
  }
};

function scrollTo(className) {
  return new Promise((resolve) => {
    const el = document.getElementsByClassName(className);
    if (!el) return resolve();

    const onScroll = () => {
      const rect = el[0].getBoundingClientRect();
      if (rect.top === 0 || Math.abs(rect.top) < 1) {
        window.removeEventListener("scroll", onScroll);
        resolve();
      }
    };

    window.addEventListener("scroll", onScroll);
    el[0].scrollIntoView({ behavior: "smooth", block: "start" });
  });
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
