<template>
  <div class="container">
    <h1>推荐</h1>
    <Banner />
    <SongSheet />
  </div>
</template>

<script setup lang="ts">
import Banner from "./banner.vue";
import SongSheet from "./songSheet.vue";
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
