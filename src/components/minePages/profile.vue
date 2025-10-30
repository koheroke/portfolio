<template>
  <div class="parent">
    <img src="/image/minepict.png" alt="background" class="minepict" />

    <div class="texts">
      <div class="text">
        <pagetitle text="Profile" />
        <slide subtitle="名前" text="東晃平" />
        <slide subtitle="所属" text="NS高2年" />
        <slide subtitle="星座" text="山羊座" />
        <slide subtitle="趣味" text="兵站学" />
      </div>
    </div>
  </div>
</template>
<script setup>
import pagetitle from "../parts/pagetitle.vue";
import slide from "../effect/slide.vue";
</script>
<style scoped>
.texts {
  margin: 2.5vh;
  position: absolute;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  width: 350px;
  height: 95vh;
  right: 1vw;
}

.minepict {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
