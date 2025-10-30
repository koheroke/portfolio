<template>
  <div class="parent">
    <textanm
      text="loading..."
      :act="textanmAct"
      class="textanm"
      v-show="textanmAct"
    />
    <fadeout
      :act="fadeoutbool"
      color="black"
      :resetAnm="resetBool"
      class="fadeout"
    >
    </fadeout>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import textanm from "./textanm.vue";
import fadeout from "./fadeout.vue";
const textanmAct = ref(false);
const fadeoutbool = ref(false);
const resetBool = ref(false);
const anmbood = defineProps({
  act: Boolean,
});

watch(
  () => anmbood.act,
  async (newval) => {
    if (newval == true) {
      resetBool.value = false;
      fadeoutbool.value = false;
      textanmAct.value = true;
      await new Promise((r) => setTimeout(r, 3000));
      textanmAct.value = false;
      fadeoutbool.value = true;
    }
    if (newval == false) {
      resetBool.value = true;
    }
  }
);
</script>
<style scoped>
.parent {
  position: absolute;
  width: 100%;
  height: 100%;
}
.fadeout {
  width: 100%;
  height: 100%;
}
.textanm {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
</style>
