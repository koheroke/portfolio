<template>
  <div id="app">
    <div class="bar">
      <Sidebar @changePage="sendPage" />
    </div>
    <div class="main"><component :is="currentComponent" /></div>
    <Mokuhyou />
    <div class="mainContent"></div>
  </div>
</template>

<script setup>
import { ref, shallowRef } from "vue";
import Sidebar from "./components/sidebar.vue";
import Profile from "./components/myPages/profile.vue";
import Mokuhyou from "./components/myPages/mokuhyou.vue";
import Opus from "./components/myPages/opus.vue";
import Career from "./components/myPages/career.vue";
import TelephoneNumber from "./components/myPages/telephoneNumber.vue";
const currentComponent = shallowRef(Profile);

function sendPage(page) {
  switch (page) {
    case "プロフィール":
      currentComponent.value = Profile;
      break;
    case "経歴":
      currentComponent.value = Mokuhyou;
      break;
    case "作品":
      currentComponent.value = Opus;
      break;
    case "今後の目標":
      currentComponent.value = Career;
      break;
    case "電話番号":
      currentComponent.value = TelephoneNumber;
      break;
  }
}
</script>

<style>
#app {
  display: flex;
}
.bar {
  z-index: 2;
}

.mainContent {
  flex: 1;
  padding: 20px;
}
</style>
