<template>
  <div class="parent">
    <div class="test"></div>
    <div :style="{ zIndex: zIndex }" class="title" ref="titleRef">
      <textanm text="AZUMA" /> <textanm text="portfolio" />
    </div>

    <img src="/image/background.png" alt="background" class="backgroundImage" />
    <div class="fadeout"><fadeout :act="fadeoutbool" /></div>
    <div class="iconbox">
      <iconLink
        v-for="(item, index) in icons"
        :key="index"
        :src="item.src"
        :alt="item.alt"
        :url="item.url"
      />
    </div>
  </div>
</template>
<script setup>
import borderanm from "../effect/borderanm.vue";
import { ref, onMounted } from "vue";
import fadeout from "../effect/fadeout.vue";
import textanm from "../effect/textanm.vue";
import iconLink from "../icons/iconLink.vue";
const zIndex = ref(30);
const titleRef = ref(null);
const fadeoutbool = ref(false);

onMounted(() => {
  setTimeout(() => {
    fadeoutbool.value = true;
  }, 1500);
});
const icons = ref([
  {
    src: "/image/icon/github.png",
    alt: "github",
    url: "https://github.com/koheroke",
  },
  {
    src: "/image/icon/discord.png",
    alt: "discord",
    url: "https://twitter.com",
  },
]);

const animateColor = () => {
  if (titleRef.value) {
    titleRef.value.style.color = "white";
  }
};
onMounted(() => {
  if (titleRef.value) {
    titleRef.value.style.color = "black";
    titleRef.value.style.transition = "color 3s ease";
  }
  setTimeout(() => {
    animateColor();
  }, 2000);
  setTimeout(() => {
    zIndex.value = 10;
  }, 2800);
});
</script>
<style scoped>
.parent {
  position: absolute;
  width: 100vw;
  height: 100vh;
}
.iconbox {
  position: absolute;
  bottom: 3%;
  right: 3%;
  width: auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  gap: 5px;
  z-index: 5;
  align-items: center;
  animation: floating-y 1.8s ease-in-out infinite alternate-reverse;
}

@media screen and (min-width: 281px) {
  .title {
    position: absolute;
    color: black;
    top: 0%;
    left: 0%;
    padding: 2px;
    z-index: 40;
    display: flex;
    font-size: 145px;
    font-family: Impact;
    flex-direction: column;
  }
}
@media screen and (min-width: 520px) {
  .title {
    position: absolute;
    color: black;
    bottom: 10%;
    top: 15%;
    left: 0%;
    padding: 2px;
    z-index: 40;
    display: flex;
    font-size: 145px;
    font-family: Impact;
    flex-direction: column;
  }
}

.text {
  font-size: 50px;
  color: white;
  position: absolute;
  bottom: 0%;
  left: 0%;
  padding: 20px;
  z-index: 3;
  font-family: "HiraMinProN-W6";
  display: flex;
  padding: 30px;
  gap: 10px;
}
.fadeout {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0%;
  top: 0%;
  z-index: 20;
  pointer-events: none;
}
@keyframes floating-y {
  0% {
    transform: translateY(5%);
  }
  100% {
    transform: translateY(-5%);
  }
}

.backgroundImage {
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  filter: brightness(0.8);
  object-fit: cover;
}
.icon {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  z-index: 4;
}
</style>
