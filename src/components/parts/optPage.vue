<template>
  <div v-show="boxfind" class="boxparent">
    <div v-show="pagefind" class="pageparent">
      <div class="movie">
        <video
          :src="`/movies/${this_optData.optData.movie}`"
          controls
          ref="refMovie"
        ></video>
      </div>
      <div class="retrunButton" @click="close()">
        <mdiWindowClose />
      </div>

      <div class="iconstext">{{ "Usage" }}</div>
      <div class="icons">
        <div v-for="icon in this_optData.optData.icons" :key="icon">
          <iconLink
            :src="`/image/icon/${icon}.png`"
            alt="icon"
            class="icon"
          ></iconLink>
        </div>
      </div>
      <div class="info">{{ this_optData.optData.info }}</div>
      <div class="loadanm">
        <loadanm :act="loadanmAct" />
      </div>
    </div>
  </div>
</template>
<script setup>
import loadanm from "../effect/loadanm.vue";
import { ref, watch } from "vue";
import mdiWindowClose from "../icons/mdiWindowClose.vue";
import iconLink from "./iconLink.vue";
const refMovie = ref(null);
const boxfind = ref(false);
const pagefind = ref(false);
const loadanmAct = ref(false);
const this_optData = defineProps({
  optData: {
    type: Object,
    required: true,
  },
  count: Number,
});

function stop() {
  refMovie.value.pause();
  refMovie.value.currentTime = 0;
}
function close() {
  boxfind.value = false;
  pagefind.value = false;
  loadanmAct.value = false;
  stop();
}

watch(
  () => this_optData.count,
  async () => {
    boxfind.value = true;
    pagefind.value = true;
    loadanmAct.value = true;
  }
);
</script>
<style scoped>
.boxparent {
  position: fixed;
  width: 90vw;
  height: 90vh;
  z-index: 100;
  background-color: rgb(0, 0, 0);
  box-shadow: 0 4px 10px rgba(1, 1, 1, 0.5);
}
.pageparent {
  width: 100%;
  height: 100%;
}
.retrunButton {
  position: absolute;
  top: 0%;
  left: 0%;
}
.icons {
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 10px;
  bottom: 0%;
  left: 0%;
  padding: 10px;
}
.iconstext {
  position: absolute;
  font-size: 40px;
  font-family: impact;
  color: white;
  padding: 10px;
  bottom: 10%;
}
.movie video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.movie {
  position: absolute;
  top: 10%;
  width: 100%;
  height: 70%;
}
.icon {
  width: 50px;
  height: 50px;
  display: inline-block;
}
.loadanm {
  z-index: 100;
  position: absolute;
  pointer-events: none;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  font-size: 60px;
  font-family: impact;
  color: white;
}
</style>
