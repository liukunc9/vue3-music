<template>
    <div class="player-list">
        <IconPark :icon="MusicList" size="20" style="margin-top: 25px;" />
    </div>
</template>

<script setup lang="ts">
import { MusicList } from "@icon-park/vue-next";
import IconPark from "@/components/common/iconPark.vue";
</script>

<style scoped lang="scss">
.player-list {
    width: 300px;
    height: 80px;
    display: flex;
    flex-direction: row-reverse;

    .i-icon {
        cursor: pointer;
    }
}
</style>