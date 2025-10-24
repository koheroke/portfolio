<template>
  <div class="parent">
    <img src="/image/minepict.png" alt="backgrownd" class="minepict" />

    <div class="texts">
      <pagetitle text="Profile" />
      <div class="text">
        <slide subtitle="名前" text="東晃平" />
        <slide subtitle="所属" text="NS高2年" />
        <slide subtitle="星座" text="山羊座" />
        <slide subtitle="趣味" text="兵站学" />
      </div>
    </div>
  </div>
</template>
<script setup>
import pagetitle from "../part/pagetitle.vue";
import { ref } from "vue";
import slide from "../effect/slide.vue";
</script>
<style scoped>
.texts {
  position: absolute;
  padding: 10px;
  background-color: #ffffff;
  width: 30vw;
  height: 100vh;
  right: 0vh;
  opacity: 0.5;
}
.minepict {
  position: absolute;
  width: auto;
  height: auto;
}
.title {
  font-size: 80px;
  font-family: Impact;
}
.text {
  display: flex;
  flex-direction: column;
  font-size: 30px;
  transform: translateX(5%);
  padding: 30px;
  gap: 30px;
}

.parent {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 2vw;
}
</style>
