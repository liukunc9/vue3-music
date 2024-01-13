import { IBanner } from "@/models/music";
import { useBanner } from "@/utils/api";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBannerStore = defineStore("banner", () => {
  const banners = ref<IBanner[] | undefined>([]);

  async function getBanners() {
    let bannerRsp = await useBanner();
    banners.value = bannerRsp.data;
  }

  return {
    banners,
    getBanners,
  };
});
