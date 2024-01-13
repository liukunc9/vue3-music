import http from "./http";
import { IBanner } from "@/models/music";
import { IBaseResp } from "@/models/baseResp";

export async function useBanner() {
  const banners = await http.get<IBaseResp<IBanner[]>>("/api/banner", { type: 1 });
  return banners;
}
