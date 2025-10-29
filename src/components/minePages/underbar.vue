<template>
  <div class="underbar">
    <div class="text" @click="toppage()">
      {{ "" }}
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(["emitPage"]);
function toppage() {
  emit("emitPage", { type: "changePage", value: "loby" });
}
</script>
<style scoped>
.underbar {
  position: relative;
  background-color: rgb(7, 7, 76);
  width: 100vw;
  height: 7vh;
  bottom: 0vh;
}
.text {
  position: absolute;
  padding: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  z-index: 2;
  font-size: 20px;
  transition: transform 0.1s;
}
.text :hover {
  transform: scale(1.1);
}
</style>
