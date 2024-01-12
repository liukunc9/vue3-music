import http from "./http";
import { IBanner } from "@/models/banner";

export async function useBanner() {
  const banners = await http.get<{banners:IBanner[]}>("/api/banner", { type: 1 });
  return banners;
}
