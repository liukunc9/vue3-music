<template>
    <div class="module">
        <div class="module-left">
            <Menu></Menu>
        </div>
        <div class="module-main">
            <router-view></router-view>
            <div class="module-footer">
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Menu from "@components/layout/menu/index.vue";
import Footer from "@components/layout/footer/index.vue";

</script>

<style scoped lang="scss">
$orangeColor: #f60;
$greyColor: #f3f3f3;

.box {
    color: $orangeColor;

    ul li {
        background: $greyColor;
    }
}
</style>
