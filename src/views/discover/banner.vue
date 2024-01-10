<template>
    <Swiper slides-per-view="auto" :grab-cursor="true">
        <SwiperSlide>slide-1</SwiperSlide>
        <SwiperSlide>slide-2</SwiperSlide>
        <SwiperSlide>slide-3</SwiperSlide>
        <SwiperSlide>slide-4</SwiperSlide>
        <SwiperSlide>slide-5</SwiperSlide>
        <SwiperSlide>slide-6</SwiperSlide>
        <SwiperSlide>slide-7</SwiperSlide>
    </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css'
</script>

<style scoped></style>
