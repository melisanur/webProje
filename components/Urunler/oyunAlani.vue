<template>
  <div class="bosluk"></div>
  <div class="oyun-alani-kutu">
    <span class="left-arrow">←</span>
    <span class="oyun-alani-text">OYUN ALANI</span>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.bosluk {
  height: 15px;
}
.oyun-alani-kutu {
  display: flex;
  justify-items: center;
  align-items: center;
  background-color: #abd9ff;
  padding: 10px 10px;
  margin-left: 178px;
  border: 2px solid transparent;
  height: 25px;
  width: 122px;
  box-sizing: border-box; 
  border-radius: 3px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.2); /* Kutuya gölge ekler */
  cursor: pointer;
}

.left-arrow {
  margin-top: -4px; 
  font-size: 23px; 
}

.oyun-alani-text {
  margin-left: 3px;
  font-size: 12px; 
  font-weight: bold; 
}

.oyun-alani-kutu:hover {
  background-color: white; 
  outline: 1px solid #abd9ff; 
  box-shadow: inset;
}
</style>