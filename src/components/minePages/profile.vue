<template>
  <div class="parent">
    <img src="/image/minepict.png" alt="backgrownd" class="minepict" />

    <div class="texts">
      <div class="title">{{ "Profile" }}</div>
      <div class="text">
        <slide profileText="<h3>名前</h3> 　東晃平`" />
        <slide profileText="<h3>所属</h3> 　NS高等学校`" />
        <slide profileText="<h3>星座</h3> 山羊座　`" />
        <slide profileText="<h3>好きなもの</h3> 　雰囲気ゲー`" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import slide from "../effect/slide.vue";
</script>
<style scoped>
.texts {
  width: 48vw;
  height: 100vh;
}
.minepict {
  width: 50vw;
  height: 100vh;
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
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 2vw;
}
</style>
