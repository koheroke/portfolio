<template>
  <div class="parent">
    <div class="child1">
      <h1>01</h1>
      <div class="name">
        {{ "東晃平" }}
        <h2>azuma_kouhei</h2>
      </div>
      <div class="minePict"></div>
      <div class="msg">
        <h3>S高等学校</h3>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.child1 {
  padding: 20px;
  position: absolute;
  background-color: rgb(255, 252, 252);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  width: 500px;
  height: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
h1 {
  position: absolute;
  left: 2%;
  top: 1%;
  font-size: 45px;
  width: 12%;
  font-family: Arial Black;
  border-bottom: 12px double #000;
}
.minePict {
  position: absolute;
  background-color: gold;
  width: 35%;
  height: 31%;
  top: 20%;
}
.name {
  position: absolute;
  font-size: 25px;
  width: 20%;
  left: 20%;
  top: 3%;
  font-family: "Hiragino Sans", "ヒラギノ角ゴシック";
  font-weight: 900;
}
h2 {
  position: absolute;
  left: 0%;
  top: 94%;
  font-size: 15px !important;
  color: white;
  background-color: #000;
}

.parent {
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  gap: 30px;
  background-color: gold;
}
</style>
