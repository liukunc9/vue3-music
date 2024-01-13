<template>
  <div class="content">
    <img :src="src" @click="handle" />
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from "@/stores/player";

defineProps<{
  src: string;
  text: string;
}>();

const playerStore = usePlayerStore();
const { play } = playerStore;

function handle() {
  play(1);
}
</script>

<style scoped lang="scss">
.content {
  width: 150px;
  user-select: none;

  img {
    display: block;
    width: 150px;
    height: 150px;
    cursor: pointer;
  }
}
</style>
