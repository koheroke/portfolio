<template>
  <div class="parent">
    <div class="pageTitle">{{ "Skill" }}</div>
    <div class="page">
      <h1>言語</h1>
      <div class="border"></div>
      <div class="langbox">
        <div class="icons">
          <img
            src="/image/icon/js.png"
            alt="js"
            class="icon"
            @click="redirectIcon('js')"
          />
          <img
            src="/image/icon/ts.png"
            alt="ts"
            class="icon"
            @click="redirectIcon('ts')"
          />
          <img
            src="/image/icon/c++++.png"
            alt="c#"
            class="icon"
            @click="redirectIcon('c#')"
          />
        </div>
      </div>
    </div>

    <div class="page">
      <h1>F/W</h1>
      <div class="border"></div>
      <div class="langbox">
        <div class="icons">
          <img
            src="/image/icon/logo.svg"
            alt="vue"
            class="icon"
            @click="redirectIcon('vue')"
          />
          <img
            src="/image/icon/hono.png"
            alt="hono"
            class="icon"
            @click="redirectIcon('hono')"
          />
        </div>
      </div>
    </div>

    <div class="page">
      <h1>その他</h1>
      <div class="border"></div>
      <div class="langbox">
        <div class="icons">
          <img
            src="/image/icon/github.png"
            alt="github"
            class="icon"
            @click="redirectIcon('github')"
          />
          <img
            src="/image/icon/iterm.png"
            alt="iterm"
            class="icon"
            @click="redirectIcon('iterm')"
          />
          <img
            src="/image/icon/docker.png"
            alt="docker"
            class="icon"
            @click="redirectIcon('docker')"
          />

          <img
            src="/image/icon/prisma.jpeg"
            alt="prisma"
            class="icon"
            @click="redirectIcon('prisma')"
          />
          <img
            src="/image/icon/postsql.png"
            alt="postsql"
            class="icon"
            @click="redirectIcon('postsql')"
          />
        </div>
      </div>
    </div>
    <div class="infometion">
      <h2>アイコンをクリックで説明を表示</h2>

      <div class="textBox" v-html="infomationtext"></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const infomationtext = ref("");
const show = ref(false);
function redirectIcon(langage) {
  switch (langage) {
    case "js":
      infomationtext.value = `<h3>できること</h3> ・JSを使ってフレームワークやモジュールを使ったフロントエンド・バックエンドの構築<br>・webSocketを使ったフロントエンド、バックエンド間の通信<br>・prismaを使った基本的なデータベース操作`;

      break;
    case "vue":
      infomationtext.value =
        "<h3>できること</h3> vueの環境構築<br>css要素やtemplate要素のjsでの制御を使ったUIの作成<br>";
      break;
    case "ts":
      window.location.href = "https://www.typescriptlang.org/";
      break;
    case "c#":
      window.location.href = "https://learn.microsoft.com/ja-jp/dotnet/csharp/";
      break;
    case "hono":
      window.location.href = "https://hono.dev/";
      break;
    case "github":
      window.location.href = "https://github.co.jp/";
      break;
    case "prisma":
      window.location.href = "https://www.prisma.io/";
      break;
    case "postsql":
      window.location.href = "https://www.postgresql.org/";
      break;
    case "docker":
      window.location.href = "https://www.docker.com/ja-jp/";
      break;
    case "iterm":
      window.location.href = "https://iterm2.com/";
      break;
  }
}
</script>
<style scoped>
.pageTitle {
  position: absolute;
  font-size: 80px;
  font-family: Impact;
  padding: 20px;
  top: 2px;
  left: 2px;
}

.icon {
  z-index: 2;
  width: 100px;
  height: 100px;
  background-color: rgb(13, 13, 13);
  border: 4px solid #ffffff;

  transition: transform 0.2s;
}

.icon:hover {
  transform: scale(1.2);
}

h2 {
  color: #ffbd59;
  background-color: black;
  display: inline-block;
  height: 35px;
  font-family: "Hiragino Sans", "ヒラギノ角ゴシック";
}
.icons {
  flex-wrap: wrap;
  display: flex;
  width: 330px;
  height: 50px;

  gap: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.langbox {
  width: 300px;
  height: 50px;
  padding: 60px 0px;
}
.textBox h3 {
  font-size: 35px;
  font-family: "Hiragino Sans", "ヒラギノ角ゴシック";
  color: #ffffff;
  background-color: black;
}
.page {
  width: 340px;
  height: 400px;
  background-color: #ffbd59;
  padding: 10px 10px;
  box-shadow: 0 4px 10px rgba(8, 8, 8, 0.939);
}
.parent {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 20px;
  background-color: #ffbd59;
  gap: 10px;
}
h1 {
  color: #ffbd59;
  font-family: "Hiragino Sans", "ヒラギノ角ゴシック";
  font-size: 50px;
  background-color: rgb(2, 2, 2);
  display: inline-block;
  padding: 5px 10px;
}
.infometion {
  width: 90vw;
  height: 300px;
}
.textBox {
  background-color: #ffffff;
  width: 100%;
  padding: 10px 10px;
  font-size: 30px;
  font-family: "Hiragino Sans", "ヒラギノ角ゴシック";
}
</style>
