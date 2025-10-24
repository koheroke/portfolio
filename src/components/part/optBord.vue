<template>
  <div class="optbord">
    <img :src="optbordInfo.image" alt="discord" class="optimage" />
    <div class="optText">
      {{ optbordInfo.text }}
      <div @click="redirect()" class="url">
        {{ optbordInfo.url }}
      </div>
    </div>
  </div>
</template>
<script setup>
const optbordInfo = defineProps({
  image: String,
  text: String,
  url: String,
});
function redirect() {
  window.location.href = optbordInfo.url;
}
</script>
<style scoped>
.optbord {
  position: relative;
  background-color: white;
  width: 280px;
  height: 160px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(1, 1, 1, 0.5);
  transition: transform 0.2s;
}
.optbord:hover {
  transform: scale(1.2);
}

.optimage {
  position: absolute;
  width: auto;
  height: 95%;
  border-radius: 10px;
}
.optText {
  position: absolute;
  font-family: "impact";
  top: 30%;
  left: 50%;
  font-size: 27px;
  height: 100%;
}
.url {
  bottom: 0%;
  font-size: 8px;
  color: rgb(36, 90, 107);
  transition: background-color 1s ease, transform 0.2s ease-in-out;
}

.url:hover {
  color: rgb(94, 145, 160);
  transform: scale(1.2);
}
</style>
