<template>
  <div class="banner">
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in banners" :key="item.targetId">
        <div class="img-container">
          <img :src="item.pic" alt="avatar" class="banner-image" @click="handle(Number(item.targetId))">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { useBannerStore } from "@/stores/banner";
import { usePlayerStore } from "@/stores/player";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const bannerStore = useBannerStore();
const { banners } = storeToRefs(bannerStore);
const { getBanners } = bannerStore;

const playerStore = usePlayerStore();
const { play } = playerStore;

onMounted(async () => {
  await getBanners();
});

function handle(id: number) {
  play(id);
}
</script>

<style scoped lang="scss">
.banner {
  padding: 0 40px;

  $carouselItemHeight: 300px;
  .el-carousel {
    height: $carouselItemHeight;

    .el-carousel__item {
      height: $carouselItemHeight;

      .img-container {
        height: $carouselItemHeight;
        display: flex;
        justify-content: center;

        img {
          height: $carouselItemHeight;
        }
      }
    }

    // .el-carousel__item:nth-child(2n) {
    //   background-color: #99a9bf;
    // }

    // .el-carousel__item:nth-child(2n + 1) {
    //   background-color: #d3dce6;
    // }
  }
}
</style>
