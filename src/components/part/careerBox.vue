<template>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes"
  />
  <div class="careerBox">
    <div class="titleBox">
      <textanm :text="carrers.pagetitle" />
    </div>
    <div class="anmBox">
      <div class="textbox">
        {{ carrers.mainText }}
      </div>
      <div class="fadeout2"><fadeout2 /></div>
      <borderanm />
    </div>
  </div>
</template>
<script setup>
const carrers = defineProps({ mainText: String, pagetitle: String });
import borderanm from "../effect/borderanm.vue";
import textanm from "../effect/textanm.vue";
import fadeout2 from "../effect/fadeout2.vue";
</script>
<style scoped>
.careerBox {
  position: relative;
  width: 320px;
  height: 570px;
}
.titleBox {
  font-weight: bold;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 10%);
  font-size: 50px;
  font-family: "Hiragino Sans", "ヒラギノ角ゴシック";
}
.anmBox {
  position: absolute;
  bottom: 10%;
  width: 320px;
  height: 420px;
}
.fadeout2 {
  position: absolute;
  z-index: 8;
  width: 100%;
  height: 100%;
}
.textbox {
  font-family: "Hiragino Sans", "ヒラギノ角ゴシック";
  padding: 10px;
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  background-color: rgb(255, 255, 255, 0.5);
}
</style>
