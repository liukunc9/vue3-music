<template>
    <div class="module">
        <div class="module-top">
            <div class="module-top-left">
                <Menu></Menu>
            </div>
            <div class="module-top-right">
                <router-view></router-view>
            </div>
        </div>
        <div class="module-bottom">
            <Footer></Footer>
        </div>
    </div>
</template>

<script setup lang="ts">
import Menu from "@/components/layout/menu/index.vue";
import Footer from "@/components/layout/footer/index.vue";

</script>

<style scoped lang="scss">
.module {
    min-width: 1440px;
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;

    .module-top {
        position: absolute;
        top: 0;
        width: 100%;
        height: calc(100% - $bottomHeight);

        .module-top-left {
            position: absolute;
            left: 0;
            width: $menuHeight;
            height: 100%;
            background-color: $menuBkColor;
        }

        .module-top-right {
            position: absolute;
            right: 0;
            width: calc(100% - $menuHeight);
            height: 100%;
            background-color: $contentPageBkColor;
        }
    }

    .module-bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: $bottomHeight;
        background-color: $bottomBkCollor;
        border-top: 1px solid $splitLineColor;
        box-sizing: border-box;
        display: flex;
    }
}
</style>
