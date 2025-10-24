<template>
  <div class="parent" ref="pageParent">
    <div class="back"></div>
    <div class="titles">
      <div class="main"><pagetitle text="Career"></pagetitle></div>
      <div class="sub"><pagesubtitle text="これまでの経歴" /></div>
    </div>
    <div class="careers">
      <careerBox pagetitle="中学" mainText="文章" />
      <careerBox pagetitle="一年生" mainText="" /><careerBox
        pagetitle="二年生"
        mainText="文章"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

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
  height: 100vh;
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
}
.main {
  transform: translateX(-30%);
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
  padding: 10%;
  top: 15%;
  display: flex;
  gap: 60px;
  z-index: 40;
}

.careers > *:nth-child(1) {
  transform: translateY(0px);
}
.careers > *:nth-child(2) {
  transform: translateY(25px);
}
.careers > *:nth-child(3) {
  transform: translateY(50px);
}
</style>
