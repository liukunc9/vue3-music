<template>
    <div class="module-menu">
        <div class="module-menu-brand">
            <IconPark :icon="MusicOne" class="branc-icon" />QQ音乐
        </div>
        <div class="module-menu-group" v-for="(item, i) in menus" :key="i">
            <div class="title">
                {{ item.name }}
            </div>
            <div class="menus" v-for="menu in item.menus" :key="menu.key">
                <router-link :to="{ name: menu.key }">
                    <div class="menu-item">
                        <IconPark :icon="menu.icon" />{{ menu.name }}
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMenu } from "./useMenu"
import IconPark from "@/components/common/iconPark.vue"
import { MusicOne } from "@icon-park/vue-next";
const menus = useMenu();
</script>

<style scoped lang="scss">
.module-menu {
    display: flex;
    flex-direction: column;
}

.module-menu-brand {
    padding: 20px 20px;
    color: $brandColor;
    font-size: 20px;
    user-select: none;

    .branc-icon {
        color: $brandIconColor;
    }
}

.module-menu-group {
    background-color: $menuBkColor;
    user-select: none;
}

.title {
    margin-top: 30px;
    padding-left: 20px;
    color: $menuGroupTitleFontColor;
    font-size: 11px;
    user-select: none; // 禁止文本选中
}

.menus {
    padding-left: 20px;
    margin-top: 10px;
    font-size: 13px;

    .router-link-active {
        .menu-item {
            background-color: $selectedMenuBkColor !important;
            color: $selectedFontColor !important;
        }
    }

    .menu-item {
        padding: 5px;
        border-radius: 5px;
        margin-right: 10px;
    }

    .menu-item:hover {
        background-color: $hoverMenuBkColor;
    }

    a {
        text-decoration: none; // 取消点击之后文本添加下划线
        color: $defaultMenuColor;
    }
}
</style>
