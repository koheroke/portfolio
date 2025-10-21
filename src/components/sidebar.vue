<template>
  <div class="barParent" :class="{ closing: isClosing, opening: isOpening }">
    <div class="sidebarText">HOME</div>
    <div class="sidebarItems">
      <v-container>
        <div v-for="item in items" :key="item.text">
          <div
            :style="{ backgroundColor: item.color }"
            @click="redirect(item.text)"
            class="redirectButton"
          >
            {{ "　" + item.text }}
          </div>
        </div>
      </v-container>
    </div>
    <div class="icons">
      <img
        src="/image/icon/github.png"
        alt="github"
        class="icon"
        @click="redirectIcon('github')"
      />
      <img
        src="/image/icon/discord.png"
        alt="discord"
        class="icon"
        @click="redirectIcon('discord')"
      />
    </div>
    <v-container class="d-flex justify-center mt-10">
      <v-card class="arrow-notch pa-4" elevation="4" @click="close()"> </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isClosing = ref(true);
let closeBool = isClosing.value;
const isOpening = ref(false);

function close() {
  if (!closeBool) {
    closeBool = true;
    isClosing.value = true;
    isOpening.value = false;
  } else {
    closeBool = false;
    isClosing.value = false;
    isOpening.value = true;
  }
  emit("emitPage", { type: "close", value: closeBool });
}

let thisItem = null;
const items = ref([
  { text: "ホーム", color: "#d5cbcb1f", class: "loby" },
  { text: "プロフィール", color: "#d5cbcb1f", class: "profile" },
  { text: "経歴", color: "#d5cbcb1f", class: "profile" },
  { text: "スキル", color: "#d5cbcb1f", class: "profile" },
  { text: "作品", color: "#d5cbcb1f", class: "opus" },
]);

const emit = defineEmits(["emitPage"]);
function redirect(text) {
  if (thisItem != null) thisItem.color = "#d5cbcb1f";
  thisItem = items.value.find((i) => i.text == text);
  thisItem.color = "#887f7f";
  emit("emitPage", { type: "changePage", value: thisItem.class });
}
redirect("ホーム");
function redirectIcon(langage) {
  switch (langage) {
    case "discord":
      window.location.href =
        "https://discord.com/channels/435276519774879744/1056491582808928316";
      break;
    case "github":
      window.location.href = "https://github.com/koheroke";
  }
}
</script>

<style scoped>
.arrow-notch {
  position: absolute;
  overflow: visible !important;
  top: 3%;
  left: 96%;
  z-index: 10;
  width: 20%;
  height: 8%;
  background-color: #f0eeee;
  clip-path: polygon(0 100%, 0 0, 40% 0, 50% 40%, 50% 60%, 40% 100%);

  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}
.arrow-notch:hover {
  transform: scale(1.2);
}
.barParent {
  position: absolute;
  top: 0%;
  box-shadow: 0 4px 10px rgba(1, 1, 1, 1.5);
  width: 275px;
  height: 100vh;
  background-color: #ffbd59;
}
.sidebarText {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 50%;
  top: 3%;
  transform: translate(-50%, 0%);
  width: 51%;
  height: 8%;
  color: black;
  font-family: "Hiragino Sans", "ヒラギノ角ゴシック";
  font-weight: 900;
  font-weight: bold;
  font-size: 40px;
}
.sidebarItems {
  position: absolute;
  font-family: "游ゴシック体", "YuGothic";
  font-weight: bold;
  position: absolute;
  top: 15%;
  color: white;
  background-color: black;
  width: 100%;
  height: 76%;
  font-size: 20px;
}
.redirectButton {
  margin-bottom: 2px;
  padding: 25px 0px;
}
.icons {
  position: absolute;
  top: 92%;
  left: 5%;
  z-index: 7;
  width: 100%;
  height: 10%;
}
.icon {
  background-color: aliceblue;
  border-radius: 10px;
  width: 16%;
  height: 60%;
  margin: 3px;
  box-shadow: 0 4px 10px rgba(1, 1, 1, 0.5);
  transition: transform 0.2s;
}

.icon:hover {
  transform: scale(1.2);
}

@keyframes slideOutLeft {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 1;
  }
}

.closing {
  animation: slideOutLeft 220ms cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
}

@keyframes slideInLeft {
  0% {
    transform: translateX(-100%);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.opening {
  animation: slideInLeft 220ms cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
}
</style>
