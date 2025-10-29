<template>
  <optsPage :opt-data="optData" :count="count" class="optdata" />

  <div class="parent">
    <div class="back"></div>
    <div class="title">
      <pagetitle text="Opus" />
    </div>
    <div class="opus">
      <optBord
        v-for="(opt, index) in opts"
        :key="index"
        :text="opt.text"
        :image="'/public/image/icon/' + opt.image"
        :url="opt.url"
        @click="redirect(opt.text)"
      ></optBord>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import pagetitle from "../part/pagetitle.vue";
import optBord from "../part/optBord.vue";
import optsPage from "../subpages/optsPage.vue";
const count = ref(0);
const optData = ref({
  name: "",
  movie: "",
  icons: [],
  info: "",
});
const optDatas = {
  EarthWrite: {
    name: "EarthWrite",
    movie: "EarthWrite.mp4",
    icons: ["js", "html-css", "vue", "ts", "hono"],
    info: "dswfv",
  },
  nPlase: {
    name: "nPlase",
    movie: "nPlase.mp4",
    icons: ["js", "html-css", "hono", "hono"],
    info: "dswfv",
  },
  nnchat: {
    name: "nPlase",
    movie: "nPlase.mp4",
    icons: ["js", "html-css", "hono", "hono"],
    info: "dswfv",
  },
};
const opts = ref([
  {
    text: "EarthWrite",
    image: "logo.png",
    url: "https://earthwrite.onrender.com/",
  },
  { text: "Nplase", image: "nplase.png", url: "https://nPlase.onrender.com/" },
  { text: "NNchat", image: "nnchat.png", url: "https://nnchat.onrender.com/" },
]);

function redirect(opt) {
  count.value++;
  optData.value = optDatas[opt];
  console.log(optData.value);
}
</script>

<style scoped>
.parent {
  position: relative;
  width: 100vw;
  height: 40vh;
  padding: 10px;
  background-color: white;
}
.title {
  position: absolute;
  left: 50%;
  top: 0%;
  transform: translate(-50%);
  z-index: 3;
}
.opus {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: auto;
  gap: 30px;
  padding: 10px;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  z-index: 2;
}
.back {
  transform: translate(-50%, -20%);
  top: 10;
  left: 50%;
  width: 350px;
  height: 350px;
  position: absolute;
  background-color: white;
  border-radius: 100%;
  z-index: 1;
}

.opus::-webkit-scrollbar {
  display: none;
}

.opus > * {
  flex: 0 0 auto;
}
.optdata {
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 20;
  max-width: 900px;
}
</style>
