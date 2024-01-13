<template>
  <div class="player-controller">
    <!-- 上一首 -->
    <IconPark :icon="GoStart" size="35"/>
    <!-- 播放键 -->
    <IconPark
      :icon="playIcon"
      size="45"
      theme="filled"
      fill="#58c0aa"
      class="player-btn"
      @click="play"
    />
    <!-- 下一首 -->
    <IconPark :icon="GoEnd" size="35"/>
  </div>
</template>

<script setup lang="ts">
import { Play, PauseOne, GoEnd, GoStart } from "@icon-park/vue-next";
import IconPark from "@/components/common/iconPark.vue";
import { ref, computed } from "vue";

// 0: 暂停中，1：播放中
const playStatus = ref(0);

const playIcon = computed(() => {
  return playStatus.value == 0 ? Play : PauseOne;
});

var audio = new Audio(
  "/SG Wannabe - Wedding.mp3"
);

function play() {
  if (playStatus.value == 0) {
    audio.play();
  } else {
    audio.pause();
  }
  playStatus.value = (playStatus.value + 1) % 2;
}
</script>

<style scoped lang="scss">
.player-controller {
    margin-top: 10px;
    margin-left: 80px;

    .i-icon {
        margin-right: 10px;
    }
}
</style>
