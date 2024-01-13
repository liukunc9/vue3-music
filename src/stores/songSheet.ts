import { useSongSheet } from "@/api";
import { defineStore } from "pinia";
import { ref } from "vue";
import { ISongSheet } from "@/models";

export const useSongSheetStore = defineStore("songSheet", () => {
  const songSheet = ref<ISongSheet[] | undefined>([]);

  async function getSongSheet() {
    let rsp = await useSongSheet();
    songSheet.value = rsp.data;
  }

  return {
    songSheet,
    getSongSheet,
  };
});
