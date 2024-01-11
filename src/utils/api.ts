import http from "./http";

export async function useBanner() {
  const banners = await http.get<{}>("/banner", { type: 1 });
  return banners;
}
