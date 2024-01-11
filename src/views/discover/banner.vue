<template>
    <Swiper slides-per-view="auto" :grab-cursor="true">
        <SwiperSlide v-for="item in banners" :key="item.targetId">
            <img :src="item.pic" class="banner-image" />
        </SwiperSlide>
    </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { useBannerStore } from "@/stores/banner";
import { storeToRefs } from "pinia";
import 'swiper/css'
import { onMounted } from "vue";

const { banners } = storeToRefs(useBannerStore());
const { getBanners } = useBannerStore();

onMounted(async () => {
    await getBanners()
})
</script>

<style scoped lang="scss"></style>
