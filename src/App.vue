<template>
  <div id="app">
    <div class="bar">
      <Sidebar @emitPage="emitPage" />
    </div>
    <div class="main">
      <page :select="select" :close="sidebarClose" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "./components/sidebar.vue";
import page from "./components/page.vue";
const select = ref("プロフィール");
const sidebarClose = ref(false);
const emitPage = (info) => {
  switch (info.type) {
    case "changePage":
      select.value = info.value;
      break;
    case "close":
      sidebarClose.value = info.value;
      break;
    default:
      return;
  }
};
</script>

<style>
#app {
  display: flex;
}
.bar {
  z-index: 11;
  position: fixed;
}
.main {
  flex: 1;
}
</style>
