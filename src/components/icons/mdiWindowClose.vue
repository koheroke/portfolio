<template>
  <div class="iconBox">
    <svg viewBox="0 0 64 64" class="icon">
      <line x1="8" y1="8" x2="56" y2="56" />
      <line x1="56" y1="8" x2="8" y2="56" />
    </svg>
  </div>
</template>

<style scoped>
.icon {
  position: absolute;
  width: 14px;
  height: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.iconBox {
  position: absolute;
  display: flex;
  width: 38px;
  height: 24px;
  background-color: white;
  transition: background-color;
}
.iconBox:hover {
  background-color: rgb(232, 51, 81);
}
.icon line {
  stroke: black;
  stroke-width: 4;
  transition: stroke;
}
.iconBox:hover .icon line {
  stroke: white;
}
</style>
