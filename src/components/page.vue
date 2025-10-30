<template>
  <div ref="parentDiv" class="mainContent">
    <div class="loby"><Loby /></div>
    <div class="profile"><Profile /></div>
    <div class="skill"><Skill /></div>
    <div class="ops"><Opus /></div>
    <div class="underbar"><underbar /></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Profile from "./minePages/profile.vue";
import Opus from "./minePages/opus.vue";
import Loby from "./minePages/loby.vue";
import underbar from "./minePages/underbar.vue";
import Skill from "./minePages/skill.vue";

const parentDiv = ref(null);
const sidebar = defineProps({
  select: String,
  close: Boolean,
});
</script>
<style scoped>
.mainContent {
  position: relative;
  overflow: visible;
  flex-direction: column;
  width: 100vw;
  top: 0vh;
  display: flex;
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
</style>
