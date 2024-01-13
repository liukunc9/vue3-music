<template>
  <div class="module-player">
    <div class="player-left">
      <PlayerSong />
    </div>
    <div class="player-mid">
      <Playerontroller />
    </div>
    <div class="player-right">
      <PlayerList />
    </div>
  </div>
</template>

<script setup lang="ts">
import PlayerSong from "./playerSong.vue";
import Playerontroller from "./playerController.vue";
import PlayerList from "./playerList.vue";
</script>

<style scoped>
.module-player {
  width: 1440px;
  height: 80px;
  position: relative;
  margin: 0 auto;

  .player-left {
    position: absolute;
    margin-left: 20px;
    width: 350px;
    height: 80px;
  }

  .player-mid {
    position: absolute;
    width: 380px;
    height: 80px;
    margin-left: 540px;
  }

  .player-right {
    position: absolute;
    width: 340px;
    height: 80px;
    margin-left: 1100px;
  }
}
</style>
