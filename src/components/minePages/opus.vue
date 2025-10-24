<template>
  <div class="parent">
    <div class="title">
      <pagetitle text="Opus" />
    </div>
    <div class="opus">
      <div class="opu">
        <optBord
          text="EarthWrite"
          image="/public/image/icon/rogo.png"
          url="https://earthwrite.onrender.com/"
        ></optBord>
      </div>
      <div>
        <optBord
          text="Nplase"
          image="/public/image/icon/rogo.png"
          url="https://earthwrite.onrender.com/"
        ></optBord>
      </div>
    </div>
  </div>
</template>
<script setup>
import pagetitle from "../part/pagetitle.vue";
import optBord from "../part/optBord.vue";
</script>

<style scoped>
.parent {
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  background-color: beige;
}
.title {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.opus {
  position: absolute;
  display: flex;
  overflow-x: visible;
  width: 100vw;
  height: 180px;
  top: 30%;
  gap: 30px;
}
</style>
