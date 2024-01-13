<template>
  <div class="banner">
    <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="50"
      :navigation="{
        enabled: true,
      }"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 2000,
        pauseOnMouseEnter: true, //鼠标进入暂停，离开继续
        disableOnInteraction: false,
      }"
      @swiper="onSwiper"
    >
      <swiper-slide v-for="item in banners" :key="item.targetId">
        <img :src="item.pic" class="banner-image" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { useBannerStore } from "@/stores/banner";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const bannerStore = useBannerStore();
const { banners } = storeToRefs(bannerStore);
const { getBanners } = bannerStore;

const modules = [Autoplay, Navigation, Pagination, A11y];

onMounted(async () => {
  await getBanners();
});

const onSwiper = (swiper) => {
  console.log(swiper);
};
</script>

<style scoped lang="scss">
.banner {
  padding: 0 40px;
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
