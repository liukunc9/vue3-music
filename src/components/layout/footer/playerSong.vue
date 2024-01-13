<template>
  <div class="play-song">
    <div class="song-img">
      <img
        src="https://imgessl.kugou.com/stdmusic/20211125/20211125170004210134.jpg"
      />
    </div>
    <div class="song-name">
      <p>SG Wannabe - Wedding</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.play-song {
  display: flex;
  height: 80px;

  .song-img {
    margin-top: 10px;
    cursor: pointer;
    width: 60px;
    height: 60px;
    // background: url('./../../../assets/default.jpg') no-repeat left top;
    background-color: #413b62;
    background-position: 100% 100%;
  }

  .song-name {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
  }

  img {
    position: absolute;
    width: 60px;
    height: 60px;
  }
}
</style>
