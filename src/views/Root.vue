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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .module-top {
        flex-grow: 1;
        display: flex;

        .module-top-left {
            min-width: 200px;
            display: flex;
            flex-direction: column;
            background-color: $menuBkColor;
        }

        .module-top-right {
            min-width: 1240px;
            flex-grow: 1;
            background-color: $contentPageBkColor;
            display: flex;
        }
    }

    .module-bottom {
        height: 80px;
        background-color: $bottomBkCollor;
        border-top: 1px solid $splitLineColor;
        display: flex;
    }
}
</style>
