<template>
  <div class="anmBorder"></div>
  <div class="parent">
    <div class="title"><pagetitle text="skill" /></div>

    <div class="skills" ref="skills">
      <div class="thisskill">
        <skillBox
          text="基本構文、イベント・DOM操作や配列操作、非同期処理やモジュール化を使ったフロントエンド・バックエンドのコーディングができます"
          image="/image/icon/js.png"
        ></skillBox>
      </div>
      <div class="thisskill">
        <skillBox
          text="基本的なテンプレート構文での動的UIの作成や、複数コンポーネントの連携やRouter、API通信を使ったweb制作ができます"
          image="/image/icon/logo.png"
        ></skillBox>
      </div>
      <div class="thisskill">
        <skillBox
          text="サーバーの立ち上げやルーティングなどの基本的な処理とwebsocketを使ったフロントエンドとの通信や簡単なデータベース制御、フレームワークを使った静的配信などができます"
          image="/image/icon/hono.png"
        ></skillBox>
      </div>
      <div class="thisskill">
        <skillBox
          text="基本的なコマンド操作、環境構築やgit、githubとの連携などのシンプルな作業ができます"
          image="/image/icon/iterm.png"
        ></skillBox>
      </div>
      <div class="thisskill">
        <skillBox
          text="基本構文とCSSを使ったwebアニメーションの作成、jsでの制御ができます"
          image="/image/icon/html-css.png"
        ></skillBox>
      </div>
    </div>
    <div class="arrow-notch arrow-notchright" @click="leftscroll()"></div>
    <div class="arrow-notch arrow-notchleft" @click="rightscroll()"></div>
  </div>
</template>
<script setup>
import skillBox from "../part/skillBox.vue";
import { ref } from "vue";
import pagetitle from "../part/pagetitle.vue";
const skills = ref(null);
let totalscroll = 0;
function rightscroll() {
  const scrollAmount = skills.value.clientWidth;
  totalscroll += scrollAmount;
  skills.value.scrollBy({ left: -scrollAmount, behavior: "smooth" });
}
function leftscroll() {
  const scrollAmount = skills.value.clientWidth;
  totalscroll -= scrollAmount;
  skills.value.scrollBy({ left: scrollAmount, behavior: "smooth" });
}
</script>
<style scoped>
.parent {
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  background-color: beige;
}

.skills {
  position: absolute;
  overflow-x: auto;
  scrollbar-width: none;
  scroll-behavior: smooth;
  top: 20%;
  width: 80vw;
  left: 10vw;
  display: flex;
  height: 80vh;
  gap: 10px;
}
.thisskill {
  height: 400px !important;
}

.arrow-notch {
  position: absolute;
  top: 50%;
  z-index: 10;
  width: 50px;
  height: 100px;
  background-color: #000000;
  transition: transform 0.2s;
}
.title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.arrow-notchright {
  right: 0;
  clip-path: polygon(0 100%, 0 0, 40% 0, 50% 40%, 50% 60%, 40% 100%);
}

.arrow-notchleft {
  left: 0;
  transform: translateX(-25%);
  clip-path: polygon(100% 100%, 100% 0, 60% 0, 50% 40%, 50% 60%, 60% 100%);
}

.arrow-notch:hover {
  transform: scale(1.2);
}
</style>
