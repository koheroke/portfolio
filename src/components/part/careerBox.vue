<template>
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
  font-family: "Times New Roman", Times, serif;
}
.anmBox {
  position: absolute;
  bottom: 10%;
  width: 320px;
  height: 420px;
}
.fadeout2 {
  position: absolute;
  z-index: 20;
  width: 100%;
  height: 100%;
}
.textbox {
  position: absolute;
  font-weight: bold;
}
</style>
