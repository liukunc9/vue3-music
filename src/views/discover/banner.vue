<template>
  <div class="banner">
    <swiper
      :modules="modules"
      :slides-per-view="3"
      :slides-per-group="1"
      :space-between="50"
      :navigation="{
        enabled: true,
      }"
      :pagination="{
        clickable: true,
        type: 'bullets',
      }"
      :loop="true"
      :autoplay="{
        delay: 2000,
        pauseOnMouseEnter: true, //鼠标进入暂停，离开继续
        disableOnInteraction: false,
      }"
    >
      <swiper-slide v-for="item in banners" :key="item.targetId">
        <img
          :src="item.pic"
          class="banner-image"
          @click="handle(Number(item.targetId))"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { useBannerStore } from "@/stores/banner";
import { usePlayerStore } from "@/stores/player";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const modules = [Autoplay, Navigation, Pagination, A11y];

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
  min-height: 150px;
  overflow: hidden;
}

.swiper-wrapper {
  .swiper-slide {
    img {
      display: block;
      height: 150px;
      cursor: pointer;
    }
  }
}
</style>
