import http from "./http";
import { IBanner, ISongSheet, ISongUrl } from "@/models";
import { IBaseResp } from "@/models/baseResp";

export async function useBanner() {
  return await http.get<IBaseResp<IBanner[]>>("/api/banner", { type: 1 });
}

export async function useSongUrl(id: number) {
  return await http.get<IBaseResp<ISongUrl>>("/api/song/url", { id: id });
}

export async function useSongSheet() {
  return await http.get<IBaseResp<ISongSheet[]>>("/api/song-sheet");
}
