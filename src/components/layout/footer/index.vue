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
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  /* justify-content: center;
  align-items: center; */

  .player-left {
    position: absolute;
    left: 0;
    margin-left: 20px;
    width: 350px;
    height: 100%;
  }

  .player-mid {
    position: relative;
    width: 380px;
    height: 100%;
    margin: 0 auto;
  }

  .player-right {
    position: absolute;
    right: 0;
    width: 340px;
    height: 100%;
    margin-right: 20px;
  }
}
</style>
