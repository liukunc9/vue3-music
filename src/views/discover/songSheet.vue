<template>
  <div class="sheets">
    <p>你的专属歌单 ></p>
    <div class="sheet-list">
      <SongItem
        v-for="item in songSheet"
        :key="item.src"
        :src="item.src"
        :text="item.text"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSongSheetStore } from "@/stores/songSheet";
import SongItem from "@/components/layout/page/songItem.vue";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const sheetStore = useSongSheetStore();
const { songSheet } = storeToRefs(sheetStore);
const { getSongSheet } = sheetStore;

onMounted(async () => {
  await getSongSheet();
});
</script>

<style scoped lang="scss">
.sheets {
  p {
    margin-left: 30px;
    user-select: none;
  }

  .sheet-list {
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;

    div {
        margin: 0 25px;
    }
  }
}
</style>
