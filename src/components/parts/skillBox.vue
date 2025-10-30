<template>
  <div class="skillbox">
    <img :src="skill.image" alt="image" class="image" />

    <div class="anmbox">
      <borderanm />
      <div class="text">{{ skill.text }}</div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import borderanm from "../effect/borderanm.vue";
const skill = defineProps({
  text: String,
  image: String,
});
</script>
<style scoped>
.image {
  position: absolute;
  width: 90px;
  height: 90px;
  left: 50%;
  top: 5%;
  transform: translateX(-50%);
}
.skillbox {
  position: relative;
  width: 250px;
  height: 310px;
}
.anmbox {
  position: absolute;
  width: 90%;
  height: 80%;
  left: 5%;
  top: 43%;
}
.text {
  position: absolute;
  top: 4%;
  left: 4%;
  padding: 10px;
  width: 92%;
  font-size: 16px;
  font-family: "Hiragino Sans", "ヒラギノ角ゴシック";
}
</style>
