<template>
  <div class="parent">
    <DIV class="test"></DIV>
    <div :style="{ zIndex: zIndex }" class="title" ref="titleRef">
      <textanm text="AZUMA" /> <textanm text="portfolio" />
    </div>

    <img src="/image/backgrownd.png" alt="backgrownd" class="backgrowndImage" />
    <div class="fadeout"><fadeout /></div>

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
import { ref, onMounted } from "vue";
import fadeout from "../effect/fadeout.vue";
import textanm from "../effect/textanm.vue";
import iconLink from "../icons/iconLink.vue";
const zIndex = ref(30);
const titleRef = ref(null);

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
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  gap: 15px;
  z-index: 5;
  align-items: center;
  animation: floating-y 1.8s ease-in-out infinite alternate-reverse;
}

.title {
  position: absolute;
  color: black;
  bottom: 10%;
  left: 0%;
  padding: 2px;
  z-index: 40;
  display: flex;
  font-size: 145px;
  flex-direction: column;
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

.backgrowndImage {
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100vw;
  height: 100vh;
  z-index: 2;
}
.icon {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  z-index: 4;
}
</style>
