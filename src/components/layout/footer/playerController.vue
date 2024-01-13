<template>
  <div class="player-controller">
    <!-- 上一首 -->
    <IconPark :icon="GoStart" size="35" />
    <!-- 播放键 -->
    <IconPark
      :icon="playIcon"
      size="45"
      theme="filled"
      fill="#58c0aa"
      class="player-btn"
      @click="togglePlay"
    />
    <!-- 下一首 -->
    <IconPark :icon="GoEnd" size="35" />
  </div>
</template>

<script setup lang="ts">
import { Play, PauseOne, GoEnd, GoStart } from "@icon-park/vue-next";
import IconPark from "@/components/common/iconPark.vue";
import { computed } from "vue";
import { usePlayerStore } from "@/stores/player";
import { storeToRefs } from "pinia";

const playerStore = usePlayerStore();
const { isPlay } = storeToRefs(playerStore);
const { togglePlay } = playerStore;

const playIcon = computed(() => {
  return isPlay.value ? PauseOne : Play;
});
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
