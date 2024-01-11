import { IBanner } from "@/models/banner";
import { useBanner } from "@/utils/api";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBannerStore = defineStore("banner", () => {
  const banners = ref<IBanner[]>([]);
  const getBanners = async () => {
    let bannerRsp = await useBanner();
    banners.value = bannerRsp.banners;
  };

  return {
    banners,
    getBanners,
  };
});
