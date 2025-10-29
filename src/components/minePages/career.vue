<template>
  <div class="parent" ref="pageParent">
    <div class="back"></div>
    <div class="titles">
      <div class="main"><pagetitle text="Careter"></pagetitle></div>
    </div>
    <div class="careers">
      <careerBox pagetitle="中学" mainText="" />
      <careerBox pagetitle="一年生" mainText="" /><careerBox
        pagetitle="二年生"
        mainText="文章"
      />
    </div>
  </div>
</template>

<style></style>

<script setup>
import { onMounted, ref } from "vue";
import careerBox from "../part/careerBox.vue";
import pagesubtitle from "../part/pagesubtitle.vue";
import pagetitle from "../part/pagetitle.vue";

const pageParent = ref(null);
const count = ref(0);
const emit = defineEmits(["scrollManeger"]);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        //emit("scrollManeger", { value: false });
      }
    },
    { threshold: 0.5 }
  );

  if (pageParent.value) observer.observe(pageParent.value);
});
</script>
<style scoped>
.parent {
  display: flex;
  justify-content: center;
  position: relative;
  background-color: white;
  color: black;
  width: 100vw;
  height: 90vh;
}
.titles {
  position: absolute;
  left: 50vw;
  top: 0%;
  z-index: 3;
  color: rgb(0, 0, 0);
}
.sub {
  transform: translateX(-50%);
  font-weight: bold;
}
.main {
  transform: translateX(-50%);
  font-weight: bold;
}

.back {
  transform: translate(-50%, -20%);
  top: 0;
  left: 50%;
  width: 350px;
  height: 350px;
  position: absolute;
  background-color: white;
  border-radius: 100%;
  z-index: 2;
}
.careers {
  position: absolute;
  overflow-x: auto;
  top: 20%;
  gap: 60px;
  z-index: 9;
  display: flex;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.careers::-webkit-scrollbar {
  display: none;
}

.careers > * {
  flex: 0 0 auto;
}
</style>
