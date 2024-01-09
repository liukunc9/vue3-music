<template>
    <div class="module-menu" v-for="(item, i) in menus" :key="i">
        <div class="title">
            {{ item.name }}
        </div>
        <div class="menus" v-for="menu in item.menus" :key="menu.key">
            <router-link :to="{name:menu.key}">
                <IconPark :icon="menu.icon"/>{{ menu.name }}
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMenu } from "./useMenu"
import IconPark from "@components/common/iconPark.vue"

const menus = useMenu();
</script>

<style scoped></style>
