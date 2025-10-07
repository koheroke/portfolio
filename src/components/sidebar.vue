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
        src="/image/logo.svg"
        alt="vue"
        class="icon"
        @click="redirectIcon('vue')"
      />
      <img
        src="/image/js.png"
        alt="js"
        class="icon"
        @click="redirectIcon('js')"
      />
    </div>
    <v-container class="d-flex justify-center mt-10">
      <v-card class="arrow-notch pa-4" elevation="4" @click="close()"> </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";

let closeBool = false;

const isClosing = ref(false);
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
}

let thisItem = null;
const items = ref([
  { text: "プロフィール", color: "#d5cbcb1f" },
  { text: "経歴", color: "#d5cbcb1f" },
  { text: "言語", color: "#d5cbcb1f" },
  { text: "作品", color: "#d5cbcb1f" },
  { text: "今後の目標", color: "#d5cbcb1f" },
  { text: "電話番号", color: "#d5cbcb1f" },
]);
const emit = defineEmits(["changePage"]);
function redirect(text) {
  if (thisItem != null) thisItem.color = "#d5cbcb1f";
  thisItem = items.value.find((i) => i.text == text);
  thisItem.color = "#887f7f";
  emit("changePage", thisItem.text);
}
redirect("プロフィール");
function redirectIcon(langage) {
  switch (langage) {
    case "js":
      window.location.href =
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
      break;
    case "vue":
      window.location.href = "https://ja.vuejs.org/";
  }
}

const selectedOption = ref("option1");
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
  background-color: #060607;
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
