<template>
    <component :is="icon" :size="size" :fill="fill" class="icon" />
</template>

<script setup lang="ts">
import type { Icon } from "@icon-park/vue-next/lib/runtime";

const { icon, size, fill } = defineProps<{
    icon: Icon | undefined,
    size?: number | string,
    fill?: string | string[]
}>()
</script>

<style scoped>
.icon {
    padding: 5px;
}
</style>