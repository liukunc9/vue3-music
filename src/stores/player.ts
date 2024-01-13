import { useSongUrl } from "@/api";
import { defineStore } from "pinia";
import { ref } from "vue";

export const usePlayerStore = defineStore("player", () => {
  const audio = new Audio();
  const isPlay = ref(false);

  async function play(id: number) {
    let songUrlRsp = await useSongUrl(id);
    audio.src = String(songUrlRsp.data?.url); // 动态添加src
    audio
      .play()
      .then(() => {
        isPlay.value = true;
      })
      .catch(() => {
        isPlay.value = false;
      });
  }

  function togglePlay() {
    isPlay.value = !isPlay.value;
    if (isPlay.value) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  return {
    audio,
    isPlay,
    play,
    togglePlay,
  };
});
